"use client"

import { getCalApi } from "@calcom/embed-react";
import {ReactNode, useEffect} from "react";
import {PrimaryButton, RectangleButton, SecondaryButton} from "@/app/components/common/buttons/index";
import TertiaryButton from "@/app/components/common/buttons/TertiaryButton";
import {usePathname} from "next/navigation";
import {Body2} from "@/app/components/common/typography";

interface Props {
    children?: ReactNode;
    buttonType?: string;
    namespace: string;
    formId: string;
}

export const RoutingFormButton = ({children, buttonType, namespace, formId}: Props) => {

    useEffect(()=>{
        (async function () {
            const cal = await getCalApi({"namespace":namespace});
            cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#3116C8"},"dark":{"cal-brand":"#3116C8"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [namespace])
    switch (buttonType) {
        case "primary":
            return <PrimaryButton data-cal-namespace={namespace}
                                  data-cal-link={`forms/${formId}`}
                                  data-cal-origin="https://connect-qa.raiqa.health"
                                  data-cal-config='{"layout":"month_view","theme":"light"}'
            >{children}</PrimaryButton>;
        case "link":
            return <Body2 data-cal-namespace={namespace}
                          data-cal-link={`forms/${formId}`}
                          data-cal-origin="https://connect-qa.raiqa.health"
                          data-cal-config='{"layout":"month_view","theme":"light"}'
                          className="text-blue-700 font-bold hover:underline cursor-pointer"
            >{children}</Body2>;
        case "secondary":
            return <SecondaryButton data-cal-namespace={namespace}
                                    data-cal-link={`forms/${formId}`}
                                    data-cal-origin="https://connect-qa.raiqa.health"
                                    data-cal-config='{"layout":"month_view","theme":"light"}'
            >{children}</SecondaryButton>;
        case "rectangle":
            return <RectangleButton data-cal-namespace={namespace}
                                    data-cal-link={`forms/${formId}`}
                                    data-cal-origin="https://connect-qa.raiqa.health"
                                    data-cal-config='{"layout":"month_view","theme":"light"}'
            >{children}</RectangleButton>;
        case "tertiary":
            return <TertiaryButton data-cal-namespace={namespace}
                                   data-cal-link={`forms/${formId}`}
                                   data-cal-origin="https://connect-qa.raiqa.health"
                                   data-cal-config='{"layout":"month_view","theme":"light"}'
            >{children}</TertiaryButton>;
        default:
            return <PrimaryButton data-cal-namespace={namespace}
                                  data-cal-link={`forms/${formId}`}
                                  data-cal-origin="https://connect-qa.raiqa.health"
                                  data-cal-config='{"layout":"month_view","theme":"light"}'
            >{children}</PrimaryButton>;
    }


};

export default RoutingFormButton;