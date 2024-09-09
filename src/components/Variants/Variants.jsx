import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

function Variants() {
    return (
        <>
            <div className=" h-screen w-full flex px-10 py-5   bg-white">
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}

                    {/* For other variants, adjust the size with `width` and `height` */}
                    {/* <Skeleton sx={{ bgcolor: 'grey.500'}} variant="circular" width={40} height={40} /> */}

                    <Skeleton
                        animation="wave"
                        variant="rounded"
                        width={350}
                        height={300}
                    />
                    <Skeleton
                        animation="wave"
                        variant="rounded"
                        sx={{ fontSize: "1rem" }}
                        width={250}
                        height={200}
                    />

                    <Skeleton
                        animation="wave"
                        variant="rounded"
                        width={1415}
                        height={700}
                    />
                    <Skeleton
                        animation="wave"
                        variant="rounded"
                        sx={{ fontSize: "1rem" }}
                        width={250}
                        height={200}
                    />

                    <Skeleton
                        animation="wave"
                        variant="rounded"
                        width={1415}
                        height={700}
                    />
                    <Skeleton
                        animation="wave"
                        variant="rounded"
                        sx={{ fontSize: "1rem" }}
                        width={250}
                        height={200}
                    />

                    <Skeleton
                        animation="wave"
                        variant="rounded"
                        width={1415}
                        height={700}
                    />
                    
                </Stack>
            </div>
        </>
    );
}

export default Variants;
