/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import Layout from "../../components/Layout/Layout";
import dynamic from "next/dynamic";
const NoSSRBusinessPlanStepForm = dynamic(() => import("./BusinessPlanWizard/BusinessPlanStepForm"), {ssr: false})

export default function Index() {
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <>
            <Layout>
                <NoSSRBusinessPlanStepForm/>
            </Layout>
        </>
    );
}
