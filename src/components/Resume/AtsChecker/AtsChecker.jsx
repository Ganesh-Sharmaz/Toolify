import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.mjs";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import ErrorBoundary from "../../ErrorHandling/ErrorBoundary.jsx";
import Variants from "../../Variants/Variants.jsx";


function AtsChecker() {
    const [pdfText, setPdfText] = useState("");
    const [promptValue, setPromptValue] = useState("");

    const handlePdfUpload = async (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            const fileReader = new FileReader();

            // When the file is loaded, extract the text
            fileReader.onload = async function (e) {
                const typedarray = new Uint8Array(e.target.result);

                // Load the PDF
                const pdf = await pdfjsLib.getDocument(typedarray).promise;

                let text = "";
                // Loop through each page
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const content = await page.getTextContent();
                    const pageText = content.items
                        .map((item) => item.str)
                        .join(" ");
                    text += `Page ${i}: ${pageText}\n`;
                }

                // Store the extracted text in the state
                setPdfText(text);
            };

            // Read the file as an ArrayBuffer for the PDF parser
            fileReader.readAsArrayBuffer(file);
        } else {
            alert("Please upload a valid PDF file.");
        }
    };

    const genAI = new GoogleGenerativeAI(
        import.meta.env.VITE_REACT_API_GEMINI_API
    );

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const res = async () => {
        const prompt = `Give the ats score out of 100 and provide the strengths of the resume and the areas to improve so that it get a better ats score with all necessary insights keyword, impact words and removal of buzzwords, at the end leave 2 tips to get hired on the basis of resume. don't provide revised resume, avoid talking about structure of resume. here is the resume: ${pdfText}`;

        const result = await model.generateContent(prompt);
        console.log("result", result);
        console.log(result.response.text());
        setPromptValue(result.response.text());
        setPromptVisiblity(true);
    };
    const generate = () => {
        res();
        setIsVisible(false);
    };

    const [isVisible, setIsVisible] = useState(true);
    const [promptVisiblity, setPromptVisiblity] = useState(false);

    return (
        <>
            {isVisible && (
                <div className="h-screen w-full bg-white font-grotesk flex-col flex  items-center">
                    <div className=" w-full flex flex-col items-center">
                        <h1 className="p-5 text-8xl font-bold select-none my-10 text-text2">
                            Upload your Resume
                        </h1>
                        <input
                            required
                            className="bg-gray-50 text-center shdow hover:shadow-xl transition ease-in-out scale-125 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-5  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="file"
                            accept="application/pdf"
                            onChange={handlePdfUpload}  
                        />
                        <p className=" cursor-default py-10 font-bold text-text2">Only .pdf files are allowed</p>
                    </div>

                    <button
                        onClick={generate}
                        className=" bg-blue-400 hover:bg-blue-500 hover:ring ring-offset-1 transition ease-in-out p-5 m-5 rounded-full font-bold text-3xl text-white shadow  "
                    >
                        Check now!
                    </button>
                </div>
            )}

            {/* Prompt results starts here */}
            {promptVisiblity ? (
                <div className=" text-pretty w-full md:px-10  h-fit">
                    <ReactMarkdown
                        components={{
                            // Heading customization
                            h1: (props) => (
                                <h1
                                    className="text-4xl font-grotesk text-text2 font-extrabold mt-6 mb-4"
                                    {...props}
                                />
                            ),
                            h2: (props) => (
                                <h2
                                    className="text-3xl  font-grotesk text-text2 font-extrabold mt-5 mb-3"
                                    {...props}
                                />
                            ),
                            h3: (props) => (
                                <h3
                                    className="text-xl font-grotesk text-text2 font-semibold mt-4 mb-2"
                                    {...props}
                                />
                            ),
                            h4: (props) => (
                                <h4
                                    className="text-lg font-grotesk text-text2 font-semibold mt-3 mb-1"
                                    {...props}
                                />
                            ),
                            h5: (props) => (
                                <h5
                                    className="text-base font-grotesk text-text2 font-semibold mt-2 mb-1"
                                    {...props}
                                />
                            ),
                            h6: (props) => (
                                <h6
                                    className="text-sm font-grotesk text-text2 font-semibold mt-1 mb-1"
                                    {...props}
                                />
                            ),

                            // Bold and Italic
                            strong: (props) => (
                                <strong
                                    className="font-bold font-grotesk text-text2 text-xl"
                                    {...props}
                                />
                            ),
                            em: (props) => (
                                <em
                                    className="italic font-grotesk text-text2 font-extrabold"
                                    {...props}
                                />
                            ),

                            // Paragraph
                            p: (props) => (
                                <p
                                    className="my-2 text-xl  font-grotesk text-text2 leading-relaxed"
                                    {...props}
                                />
                            ),

                            // Lists
                            ul: (props) => (
                                <ul
                                    className="list-disc text-xl font-grotesk text-text2 list-inside ml-6 my-2"
                                    {...props}
                                />
                            ),
                            ol: (props) => (
                                <ol
                                    className="list-decimal font-grotesk text-text2 list-inside ml-6 my-2"
                                    {...props}
                                />
                            ),
                            li: (props) => (
                                <li
                                    className="my-1 font-grotesk text-text2"
                                    {...props}
                                />
                            ),

                            // Blockquote
                            blockquote: (props) => (
                                <blockquote
                                    className="border-l-4 font-grotesk text-text2 border-gray-300 pl-4 italic my-4"
                                    {...props}
                                />
                            ),

                            // Code and Preformatted Text
                            code: ({ inline, children, ...props }) =>
                                inline ? (
                                    <code
                                        className="bg-gray-100 font-grotesk  text-red-500 rounded p-1"
                                        {...props}
                                    >
                                        {children}
                                    </code>
                                ) : (
                                    <pre className="bg-gray-900 font-grotesk  text-green-400 rounded-md p-4 my-2 overflow-auto">
                                        <code>{children}</code>
                                    </pre>
                                ),

                            // Links
                            a: (props) => (
                                <a
                                    className="text-blue-500 font-grotesk  underline"
                                    {...props}
                                />
                            ),

                            // Horizontal Rule
                            hr: () => (
                                <hr className="my-4 font-grotesk text-text2 border-gray-300" />
                            ),

                            // Images
                            img: (props) => (
                                <img
                                    className="mx-auto font-grotesk text-text2 rounded-lg my-4 shadow-lg"
                                    {...props}
                                    alt={props.alt || ""}
                                />
                            ),
                        }}
                        remarkPlugins={[remarkGfm]}
                    >
                        {promptValue}
                    </ReactMarkdown>
                </div>
            ) : (
                <Variants></Variants>
            )}

            {/* Prompt results ends here */}
        </>
    );
}

export default AtsChecker;
