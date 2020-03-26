
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':51945/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('aphrodite'), require('@volusion/element-proptypes')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'aphrodite', '@volusion/element-proptypes'], factory) :
    (global = global || self, factory(global.volBlock_local = {}, global.React, global.aphrodite, global.ElementSdk));
}(this, (function (exports, React, aphrodite, elementProptypes) { 'use strict';

    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

    var getStyles = function getStyles(blockConfig) {
      return {
        example: {
          fontSize: '2rem'
        }
      };
    };

    var configSchema = {
      text: {
        label: 'Text content',
        type: elementProptypes.ElementPropTypes.string
      }
    };
    var defaultConfig = {
      text: 'Element Starter Block'
    };

    var Block = function Block(props) {
      var classes = aphrodite.StyleSheet.create(getStyles());
      return /*#__PURE__*/React.createElement("h1", {
        className: aphrodite.css(classes.example)
      }, props.text);
    };

    Block.defaultProps = defaultConfig;

    var getDataProps = function getDataProps(utils, props) {
      return Promise.resolve({});
    };

    exports.block = Block;
    exports.configSchema = configSchema;
    exports.defaultConfig = defaultConfig;
    exports.getDataProps = getDataProps;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=component.umd.js.map
