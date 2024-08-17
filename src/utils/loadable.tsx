import React, { FC, LazyExoticComponent } from "react";
import { Suspense } from "react";

export const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) => (
    <Suspense fallback={<div className="flex items-center justify-center"></div>}>
        <Component {...props} />
    </Suspense>
);