import React from "react";

function Footer() {
    return (
        <div className=" text-[14px] font-poppins backdrop-blur-sm py-7 bottom-1 ">
            <div className=" text-[16px] px-10 font-semibold text-air-h4">More Services will be added in future!</div>
            <div className=" py-7 text-[14px] px-10">
              <h4 className=" mb-2 font-semibold text-air-h4">
                Support
              </h4>
              <p
              className="text-airbnbpara"><a href="#">Email</a></p>
            </div>
            <div className="mx-8 border-air-border border-t-2">
                <p className=" text-[14px] pt-8 text-airbnbpara font-poppins ">
                    © 2024 ToolStudio, Inc.
                </p>
            </div>
        </div>
    );
}

export default Footer;
