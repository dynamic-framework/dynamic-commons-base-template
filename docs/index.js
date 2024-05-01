'use strict';

var jsxRuntime = require('react/jsx-runtime');
var uiReact = require('@dynamic-framework/ui-react');
var react = require('react');

function SimpleComponent({ soft }) {
    return (jsxRuntime.jsx(uiReact.DAlert, { type: "info", soft: soft, children: "Simple Component" }));
}

function useConsoleLogEffect() {
    react.useEffect(() => {
        console.log('useConsoleLogEffect');
    }, []);
}

function Element1() {
    return (jsxRuntime.jsx(uiReact.DChip, { theme: "secondary", text: "Element 1" }));
}

function Element2() {
    return (jsxRuntime.jsx(uiReact.DChip, { theme: "primary", text: "Element 2" }));
}

function ComplexComponent() {
    useConsoleLogEffect();
    return (jsxRuntime.jsxs("div", { className: "d-flex flex-column gap-2", children: [jsxRuntime.jsx(Element1, {}), jsxRuntime.jsx(Element2, {})] }));
}

/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
var liquidParser = {
    library: {},
    engine: undefined,
    init(library, Liquid) {
        this.library = library;
        if (Liquid) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
            this.engine = new Liquid.Liquid({
                strictFilters: true,
                strictVariables: true,
            });
        }
    },
    /**
     * Parse a liquid string
     * @param liquidString Target Content Space UID
     * @returns a usable object or string
     */
    async parseLiquidAsync(liquidString) {
        try {
            return this.engine.parseAndRender(liquidString, this.library);
        }
        catch (error) {
            return error.message;
        }
    },
    /**
     * Parse a liquid string
     * @param liquidString Target Content Space UID
     * @returns a usable object or string
     */
    parseLiquid(liquidString) {
        try {
            return this.engine.parseAndRenderSync(liquidString, this.library);
        }
        catch (error) {
            return error.message;
        }
    },
    parse(liquidString) {
        if (this.engine) {
            return this.parseLiquid(liquidString);
        }
        return liquidString;
    },
    async parseAsync(liquidString) {
        if (this.engine) {
            return this.parseLiquidAsync(liquidString);
        }
        return liquidString;
    },
};

exports.ComplexComponent = ComplexComponent;
exports.SimpleComponent = SimpleComponent;
exports.liquidParser = liquidParser;
//# sourceMappingURL=index.js.map
