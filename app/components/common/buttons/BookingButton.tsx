"use client"

import { getCalApi } from "@calcom/embed-react";
import {ReactNode, useEffect} from "react";
import {PrimaryButton, RectangleButton, SecondaryButton} from "@/app/components/common/buttons/index";
import TertiaryButton from "@/app/components/common/buttons/TertiaryButton";
import {usePathname} from "next/navigation";

interface Props {
    children?: ReactNode;
    buttonType?: string;
    className?: string;
}

export const BookingButton = ({children, buttonType, className}: Props) => {
    const pathname = usePathname();
    let firstPathSegment = pathname?.split('/')[1] || 'patient';
    const isPractitioner = firstPathSegment === 'practitioner'
    const practitionerUsername = process.env.NEXT_PUBLIC_PRACTITIONER_USERNAME || "support";
    const practitionerAppointmentType = process.env.NEXT_PUBLIC_PRACTITIONER_APPOINTMENT_TYPE || "raiqa-support";
    const calLink = practitionerUsername + '/' + practitionerAppointmentType;
    const calOrigin = process.env.NEXT_PUBLIC_PRACTITIONER_ORIGIN_LINK || "https://my.raiqahealth.au"
    useEffect(()=>{
        (async function () {
            const cal = await getCalApi({"namespace": practitionerAppointmentType});
                cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#3116C8"},"dark":{"cal-brand":"#3116C8"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [practitionerAppointmentType])
    if(isPractitioner){
        switch (buttonType) {
            case "primary":
                return <PrimaryButton data-cal-namespace={practitionerAppointmentType}
                                      data-cal-link={calLink}
                                      data-cal-origin={calOrigin}
                                      data-cal-config='{"layout":"month_view"}'
                                      className={className}
                >{children}</PrimaryButton>;
            case "secondary":
                return <SecondaryButton data-cal-namespace={practitionerAppointmentType}
                                        data-cal-link={calLink}
                                        data-cal-origin={calOrigin}
                                        data-cal-config='{"layout":"month_view"}'
                                        className={className}
                >{children}</SecondaryButton>;
            case "rectangle":
                return <RectangleButton data-cal-namespace={practitionerAppointmentType}
                                        data-cal-link={calLink}
                                        data-cal-origin={calOrigin}
                                        data-cal-config='{"layout":"month_view"}'
                                        className={className}
                >{children}</RectangleButton>;
            case "tertiary":
                return <TertiaryButton data-cal-namespace={practitionerAppointmentType}
                                       data-cal-link={calLink}
                                       data-cal-origin={calOrigin}
                                       data-cal-config='{"layout":"month_view"}'
                                       className={className}
                >{children}</TertiaryButton>;
            default:
                return <PrimaryButton data-cal-namespace={practitionerAppointmentType}
                                      data-cal-link={calLink}
                                      data-cal-origin={calOrigin}
                                      data-cal-config='{"layout":"month_view"}'
                                      className={className}
                >{children}</PrimaryButton>;
        }
    }
    else{
        switch (buttonType) {
            case "primary":
                return <PrimaryButton data-cal-namespace={practitionerAppointmentType}
                                      data-cal-link={calLink}
                                      data-cal-origin={calOrigin}
                                      data-cal-config='{"layout":"month_view"}'
                                      className={className}
                >{children}</PrimaryButton>;
            case "secondary":
                return <SecondaryButton data-cal-namespace={practitionerAppointmentType}
                                        data-cal-link={calLink}
                                        data-cal-origin={calOrigin}
                                        data-cal-config='{"layout":"month_view"}'
                                        className={className}
                >{children}</SecondaryButton>;
            case "rectangle":
                return <RectangleButton data-cal-namespace={practitionerAppointmentType}
                                        data-cal-link={calLink}
                                        data-cal-origin={calOrigin}
                                        data-cal-config='{"layout":"month_view"}'
                                        className={className}
                >{children}</RectangleButton>;
            case "tertiary":
                return <TertiaryButton data-cal-namespace={practitionerAppointmentType}
                                       data-cal-link={calLink}
                                       data-cal-origin={calOrigin}
                                       data-cal-config='{"layout":"month_view"}'
                                       className={className}
                >{children}</TertiaryButton>;
            default:
                return <PrimaryButton data-cal-namespace={practitionerAppointmentType}
                                      data-cal-link={calLink}
                                      data-cal-origin={calOrigin}
                                      data-cal-config='{"layout":"month_view"}'
                                      className={className}
                >{children}</PrimaryButton>;
        }
    }


};

export default BookingButton;