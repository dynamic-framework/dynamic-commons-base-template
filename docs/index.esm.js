import { jsx, jsxs } from 'react/jsx-runtime';
import { DAlert, DChip } from '@dynamic-framework/ui-react';
import { useEffect } from 'react';

function SimpleComponent({ theme = 'info' }) {
    return (jsx(DAlert, { theme: theme, children: "Simple Component" }));
}

/* eslint-disable no-console */
function useConsoleLogEffect() {
    useEffect(() => {
        console.log('useConsoleLogEffect');
    }, []);
}

function Element1() {
    return (jsx(DChip, { theme: "secondary", text: "Element 1" }));
}

function Element2() {
    return (jsx(DChip, { theme: "primary", text: "Element 2" }));
}

function Element3() {
    return (jsx(DChip, { theme: "danger", text: "Element 3" }));
}

function ComplexComponent() {
    useConsoleLogEffect();
    return (jsxs("div", { className: "d-flex flex-column gap-2", children: [jsx(Element1, {}), jsx(Element2, {}), jsx(Element3, {})] }));
}

function ScssComponent() {
    return (jsxs("div", { className: "wireframe-red", children: [jsxs("div", { style: { width: '300px', aspectRatio: '4 / 3' }, children: [jsx("div", { style: { width: '100px', aspectRatio: '1 / 1' } }), jsx("div", { style: { width: '100px', aspectRatio: '1 / 1' } }), jsx("p", { className: "float-end", children: "hola" })] }), jsx("div", { style: { width: '100px', aspectRatio: '1 / 1' } })] }));
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

export { ComplexComponent, ScssComponent, SimpleComponent, liquidParser };
//# sourceMappingURL=index.esm.js.map
