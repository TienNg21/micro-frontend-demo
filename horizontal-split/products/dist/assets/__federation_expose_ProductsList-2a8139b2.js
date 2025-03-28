import { importShared } from './__federation_fn_import-acdf1f0d.js';
import { r as reactExports } from './index-6af61f11.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const React = await importShared('react');

function ProductsList() {
  const [products] = React.useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, padding: "20px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Products" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      product.name,
      " - $",
      product.price
    ] }, product.id)) })
  ] });
}

export { ProductsList as default };
