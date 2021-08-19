/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ChartContainer {
    }
    interface DatasetSelector {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLChartContainerElement extends Components.ChartContainer, HTMLStencilElement {
    }
    var HTMLChartContainerElement: {
        prototype: HTMLChartContainerElement;
        new (): HTMLChartContainerElement;
    };
    interface HTMLDatasetSelectorElement extends Components.DatasetSelector, HTMLStencilElement {
    }
    var HTMLDatasetSelectorElement: {
        prototype: HTMLDatasetSelectorElement;
        new (): HTMLDatasetSelectorElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "chart-container": HTMLChartContainerElement;
        "dataset-selector": HTMLDatasetSelectorElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ChartContainer {
        "onTodoCompleted"?: (event: CustomEvent<any>) => void;
    }
    interface DatasetSelector {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "chart-container": ChartContainer;
        "dataset-selector": DatasetSelector;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "chart-container": LocalJSX.ChartContainer & JSXBase.HTMLAttributes<HTMLChartContainerElement>;
            "dataset-selector": LocalJSX.DatasetSelector & JSXBase.HTMLAttributes<HTMLDatasetSelectorElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
