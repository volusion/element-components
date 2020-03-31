import React from "react";
import { mount } from "enzyme";
import { block as Button, defaultConfig } from "./index";
import { GlobalSettings } from "./types";

const globalSettings: GlobalSettings = {
    globalComponents: {
        volComponentButton: {
            primaryButtonStyles: {
                size: "large",
                rounded: "none",
                textColor: "#fff",
                fontWeight: "700",
                borderColor: "rgba(247, 67, 186, 1)",
                growOnHover: true,
                letterSpacing: "none",
                textTransform: "none",
                hoverTextColor: "#fff",
                backgroundColor: "rgba(247, 68, 186, 1)",
                borderThickness: "none",
                hoverBorderColor: "rgba(0, 0, 0, 1)",
                hoverBackgroundColor: "rgba(218, 15, 148, 1)"
            },
            secondaryButtonStyles: {
                size: "block",
                rounded: "none",
                textColor: "rgba(255, 255, 255, 1)",
                fontWeight: "700",
                borderColor: "rgba(247, 67, 186, 1)",
                growOnHover: false,
                letterSpacing: "none",
                textTransform: "none",
                hoverTextColor: "rgba(255, 255, 255, 1)",
                backgroundColor: "rgba(247, 74, 201, 1)",
                borderThickness: "thin",
                hoverBorderColor: "rgba(0, 0, 0, 1)",
                hoverBackgroundColor: "rgba(0, 0, 0, 1)"
            }
        }
    }
}

test("it renders without errors", () => {
    mount(<Button {...defaultConfig} globalSettings={globalSettings} />)
})
