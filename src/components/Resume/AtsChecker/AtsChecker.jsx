import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.mjs";
import ReactMarkdown from "react-markdown";

import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeHighlight from 'rehype-highlight';

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
    };
    const generate = () => {
        res();
    };

    return (
        <div className="h-fit flex-col flex justify-center items-center">
            <div>
                <h1>Upload a PDF</h1>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="file"
                    accept="application/pdf"
                    onChange={handlePdfUpload}
                />
                <div>
                    <h2>Extracted Text:</h2>
                    <textarea
                        value={pdfText}
                        rows="10"
                        style={{ width: "1000px" }}
                        readOnly
                    />
                </div>
            </div>

            <button
                onClick={generate}
                className=" bg-blue-400 text-xl p-5 m-5 rounded-full "
            >
                generate
            </button>
            <div  >
                <ReactMarkdown children={promptValue} remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeHighlight]}/>
        
            </div>
        </div>
    );
}

export default AtsChecker;
