function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var styles = (function (_ref) {
    var primary = _ref.primary,
        secondary = _ref.secondary;

    return {
        baseStyles: {
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'color .15s ease-in',
            display: 'inline-block',
            cursor: 'pointer',
            ':hover': { transition: 'color .15s ease-in' },
            ':active': { transition: 'color .15s ease-in' },
            ':visited': { transition: 'color .15s ease-in' },
            ':link': { transition: 'color .15s ease-in' },
            ':focus': {
                transition: 'color .15s ease-in',
                outline: '1px dotted currentColor'
            }
        },
        borderBasic: {
            borderStyle: 'solid',
            borderWidth: '.125rem'
        },
        borderThin: {
            borderStyle: 'solid',
            borderWidth: '1px'
        },
        borderThick: {
            borderStyle: 'solid',
            borderWidth: '.25rem'
        },
        borderNone: {
            borderStyle: 'none',
            borderWidth: 0
        },
        sizeSmall: {
            fontSize: '.75rem',
            paddingTop: '.25rem',
            paddingBottom: '.25rem',
            paddingLeft: '.5rem',
            paddingRight: '.5rem'
        },
        sizeMedium: {
            fontSize: '.875rem',
            paddingTop: '.5rem',
            paddingBottom: '.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem'
        },
        sizeLarge: {
            fontSize: '1rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '2rem',
            paddingRight: '2rem'
        },
        sizeBlock: {
            fontSize: '1rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            width: '100%',
            maxWidth: '30em'
        },
        cornerNone: {
            borderRadius: 0
        },
        cornerSmall: {
            borderRadius: '.125rem'
        },
        cornerMedium: {
            borderRadius: '.25rem'
        },
        cornerLarge: {
            borderRadius: '.5rem'
        },
        cornerPill: {
            borderRadius: '9999px'
        },
        weight300: {
            fontWeight: 300
        },
        weight400: {
            fontWeight: 400
        },
        weight500: {
            fontWeight: 500
        },
        weight600: {
            fontWeight: 600
        },
        weight700: {
            fontWeight: 700
        },
        weight800: {
            fontWeight: 800
        },
        weight900: {
            fontWeight: 900
        },
        textTransformNone: {
            textTransform: 'none'
        },
        textTransformCapitalize: {
            textTransform: 'capitalize'
        },
        textTransformLowercase: {
            textTransform: 'lowercase'
        },
        textTransformUppercase: {
            textTransform: 'uppercase'
        },
        spacingNone: {},
        spacingTracked: {
            letterSpacing: '.1em'
        },
        spacingTight: {
            letterSpacing: '-.05em'
        },
        spacingMega: {
            letterSpacing: '.25em'
        },
        grow: {
            '-moz-osx-font-smoothing': 'grayscale',
            '-webkit-backface-visibility': 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            transition: 'transform .25s ease-out',
            ':hover': {
                transform: 'scale(1.05)'
            },
            ':focus': {
                transform: 'scale(1.05)'
            },
            ':active': {
                transform: 'scale(.90)'
            }
        },
        primaryButton: {
            backgroundColor: primary.backgroundColor,
            borderColor: primary.borderColor,
            color: primary.textColor || 'white'
        },
        primaryButtonHover: {
            ':hover': {
                backgroundColor: primary.hoverBackgroundColor,
                borderColor: primary.hoverBorderColor,
                color: primary.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        },
        secondaryButton: {
            backgroundColor: secondary.backgroundColor,
            borderColor: secondary.borderColor,
            color: secondary.textColor || 'white'
        },
        secondaryButtonHover: {
            ':hover': {
                backgroundColor: secondary.hoverBackgroundColor,
                borderColor: secondary.hoverBorderColor,
                color: secondary.hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        }
    };
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var name = 'volComponentButton';

var baseButtonStylesConfig = {
    textColor: '#fff',
    hoverTextColor: '#fff',
    backgroundColor: '#333',
    hoverBackgroundColor: '#555',
    borderColor: '#333333',
    hoverBorderColor: '#555',
    fontWeight: '700', // 300, 400, 500, 600, 700, 800, 900
    textTransform: 'none', // none, capitalize, lowercase, uppercase
    letterSpacing: 'none', // none, tracked, tight, mega
    borderThickness: 'basic', // basic, thin, thick, none
    size: 'medium', // small, medium, large, block
    rounded: 'medium', // none, small, medium, large, pill
    growOnHover: false
};

var defaultConfig = {
    buttonStyle: 'primary',
    className: '',
    href: '',
    primaryButtonStyles: _extends({}, baseButtonStylesConfig),
    secondaryButtonStyles: _extends({}, baseButtonStylesConfig, {
        textColor: '#666',
        hoverTextColor: '#333',
        backgroundColor: '#fff',
        hoverBackgroundColor: '#f2f2f2',
        borderColor: '#666',
        hoverBorderColor: '#333'
    })
};

var factory = function factory(_ref, _ref2, _ref3) {
    var React = _ref.React,
        ElementPropTypes = _ref.ElementPropTypes;
    var StyleSheet = _ref2.StyleSheet,
        css = _ref2.css;
    var globalComponents = _ref3.globalComponents;

    var buttonGlobalStyles = globalComponents.volComponentButton;
    var mergedComponentStyles = {
        primary: _extends({}, defaultConfig.primaryButtonStyles, (buttonGlobalStyles || {}).primaryButtonStyles),
        secondary: _extends({}, defaultConfig.secondaryButtonStyles, (buttonGlobalStyles || {}).secondaryButtonStyles)
    };
    var classes = StyleSheet.create(styles(mergedComponentStyles));
    var buttonStylesConfigSpec = {
        textColor: ElementPropTypes.color.isRequired,
        hoverTextColor: ElementPropTypes.color.isRequired,
        backgroundColor: ElementPropTypes.color.isRequired,
        hoverBackgroundColor: ElementPropTypes.color.isRequired,
        borderColor: ElementPropTypes.color.isRequired,
        hoverBorderColor: ElementPropTypes.color.isRequired,
        fontWeight: ElementPropTypes.oneOf(['300', '400', '500', '600', '700', '800', '900']).isRequired,
        textTransform: ElementPropTypes.oneOf(['none', 'capitalize', 'lowercase', 'uppercase']).isRequired,
        borderThickness: ElementPropTypes.oneOf(['basic', 'thin', 'thick', 'none']).isRequired,
        size: ElementPropTypes.oneOf(['small', 'medium', 'large', 'block']).isRequired,
        rounded: ElementPropTypes.oneOf(['none', 'small', 'medium', 'large', 'pill']).isRequired,
        growOnHover: ElementPropTypes.bool.isRequired
    };
    var configSpec = {
        children: ElementPropTypes.array,
        primaryButtonStyles: ElementPropTypes.shape(buttonStylesConfigSpec),
        secondaryButtonStyles: ElementPropTypes.shape(buttonStylesConfigSpec)
    };

    var component = function (_React$Component) {
        inherits(component, _React$Component);

        function component() {
            var _ref4;

            var _temp, _this, _ret;

            classCallCheck(this, component);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref4 = component.__proto__ || Object.getPrototypeOf(component)).call.apply(_ref4, [this].concat(args))), _this), _this.configClasses = function (_ref5) {
                var fontWeight = _ref5.fontWeight,
                    letterSpacing = _ref5.letterSpacing,
                    textTransform = _ref5.textTransform,
                    borderThickness = _ref5.borderThickness,
                    size = _ref5.size,
                    rounded = _ref5.rounded,
                    growOnHover = _ref5.growOnHover;

                var base = classes.baseStyles;
                var borders = {
                    basic: classes.borderBasic,
                    thin: classes.borderThin,
                    thick: classes.borderThick,
                    none: classes.borderNone
                };
                var sizes = {
                    small: classes.sizeSmall,
                    medium: classes.sizeMedium,
                    large: classes.sizeLarge,
                    block: classes.sizeBlock
                };
                var corners = {
                    none: classes.cornerNone,
                    small: classes.cornerSmall,
                    medium: classes.cornerMedium,
                    large: classes.cornerLarge,
                    pill: classes.cornerPill
                };
                var weight = {
                    300: classes.weight300,
                    400: classes.weight400,
                    500: classes.weight500,
                    600: classes.weight600,
                    700: classes.weight700,
                    800: classes.weight800,
                    900: classes.weight900
                };
                var text = {
                    none: classes.textTransformNone,
                    capitalize: classes.textTransformCapitalize,
                    lowercase: classes.textTransformLowercase,
                    uppercase: classes.textTransformUppercase
                };

                var spacing = {
                    none: null,
                    tracked: classes.spacingTracked,
                    tight: classes.spacingTight,
                    mega: classes.spacingMega
                };

                var grow = growOnHover ? classes.grow : null;

                /* eslint-disable security/detect-object-injection */
                return css(base, text[textTransform], weight[fontWeight], borders[borderThickness], sizes[size], corners[rounded], spacing[letterSpacing], grow);
                /* eslint-enable security/detect-object-injection */
            }, _this.getButtonClasses = function (role, styles$$1) {
                var baseStyles = _this.configClasses(styles$$1);
                if (role === 'secondary') {
                    return baseStyles + ' ' + css(classes.secondaryButton, classes.secondaryButtonHover);
                } else {
                    return baseStyles + ' ' + css(classes.primaryButton, classes.primaryButtonHover);
                }
            }, _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(component, [{
            key: 'render',
            value: function render() {
                var _props = this.props,
                    children = _props.children,
                    buttonStyle = _props.buttonStyle,
                    className = _props.className,
                    rest = objectWithoutProperties(_props, ['children', 'buttonStyle', 'className']);

                var classExtensions = className ? className : '';
                var styles$$1 = buttonStyle === 'secondary' ? mergedComponentStyles.secondary : mergedComponentStyles.primary;
                return React.createElement(
                    React.Fragment,
                    null,
                    this.props.href ? React.createElement(
                        'a',
                        _extends({
                            className: this.getButtonClasses(buttonStyle, styles$$1) + ' ' + classExtensions
                        }, rest),
                        children
                    ) : React.createElement(
                        'button',
                        _extends({
                            className: this.getButtonClasses(buttonStyle, styles$$1) + ' ' + classExtensions
                        }, rest),
                        children
                    )
                );
            }
        }]);
        return component;
    }(React.Component);

    component.propTypes = _extends({
        className: propTypes.string,
        buttonStyle: propTypes.string,
        extendClasses: propTypes.string,
        href: propTypes.string
    }, configSpec);

    return {
        component: component,
        config: configSpec
    };
};

var index = /*#__PURE__*/Object.freeze({
	factory: factory,
	defaultConfig: defaultConfig,
	name: name
});

var styles$1 = (function (name, _ref, _ref2) {
    var color = _ref.color,
        typography = _ref.typography;
    var textColor = _ref2.textColor,
        backgroundColor = _ref2.backgroundColor,
        borderColor = _ref2.borderColor,
        focusBackgroundColor = _ref2.focusBackgroundColor,
        focusBorderColor = _ref2.focusBorderColor;

    var styles = {
        input: {
            fontFamily: typography.fontFamily,
            backgroundColor: backgroundColor || color.primary,
            borderColor: borderColor || color.primary,
            color: textColor || 'inherit'
        },
        focus: {
            ':focus': {
                outline: 'none',
                backgroundColor: focusBackgroundColor || color.primary,
                borderColor: focusBorderColor || color.primary
            }
        }
    };

    return styles;
});

var name$1 = 'volComponentInput';

var defaultConfig$1 = {
    inputType: 'text',
    placeholderText: '',
    styles: {
        textColor: '#2e2e2e',
        textTransform: 'none', // none, uppercase
        backgroundColor: 'transparent',
        borderColor: '#2e2e2e',
        focusBackgroundColor: 'transparent',
        focusBorderColor: '#2e2e2e',
        borderThickness: 'basic', // basic, thin, thick, none
        size: 'large', // small, medium, large
        rounded: 'none' // none, small, medium, large, pill
    }
};

var factory$1 = function factory(_ref, _ref2, globalStyles) {
    var React = _ref.React,
        ElementPropTypes = _ref.ElementPropTypes;

    var _class, _temp2;

    var StyleSheet = _ref2.StyleSheet,
        css = _ref2.css;

    var mergedComponentStyles = _extends({}, defaultConfig$1.styles, (globalStyles.globalComponents['volComponentInput'] || {}).styles);
    var classes = StyleSheet.create(styles$1(name$1, globalStyles, mergedComponentStyles));

    var configSpec = {
        placeholderText: ElementPropTypes.string,
        inputType: ElementPropTypes.string,
        styles: ElementPropTypes.shape({
            textColor: ElementPropTypes.string.isRequired,
            textTransform: ElementPropTypes.oneOf(['uppercase', 'none']).isRequired,
            backgroundColor: ElementPropTypes.string.isRequired,
            borderColor: ElementPropTypes.string.isRequired,
            focusBackgroundColor: ElementPropTypes.string,
            focusBorderColor: ElementPropTypes.string,
            borderThickness: ElementPropTypes.oneOf(['basic', 'thin', 'thick', 'none']).isRequired,
            size: ElementPropTypes.oneOf(['small', 'medium', 'large']).isRequired,
            rounded: ElementPropTypes.oneOf(['none', 'small', 'medium', 'large', 'pill']).isRequired
        })
    };

    var component = (_temp2 = _class = function (_React$Component) {
        inherits(component, _React$Component);

        function component() {
            var _ref3;

            var _temp, _this, _ret;

            classCallCheck(this, component);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref3 = component.__proto__ || Object.getPrototypeOf(component)).call.apply(_ref3, [this].concat(args))), _this), _this.configClasses = function (_ref4) {
                var textTransform = _ref4.textTransform,
                    borderThickness = _ref4.borderThickness,
                    size = _ref4.size,
                    rounded = _ref4.rounded;

                var base = 'link dib pointer bg-animate';
                var borders = {
                    basic: 'ba bw1',
                    thin: 'ba',
                    thick: 'ba bw2',
                    none: 'bn'
                };
                var sizes = {
                    small: 'f7 pa1',
                    medium: 'f6 pa2',
                    large: 'f5 pa3'
                };
                var corners = {
                    none: 'br0',
                    small: 'br1',
                    medium: 'br2',
                    large: 'br3',
                    pill: 'br-pill'
                };
                var text = {
                    none: '',
                    uppercase: 'ttu'
                };

                /* eslint-disable security/detect-object-injection */
                return base + ' ' + text[textTransform] + ' ' + borders[borderThickness] + ' ' + sizes[size] + ' ' + corners[rounded];
                /* eslint-enable security/detect-object-injection */
            }, _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(component, [{
            key: 'render',
            value: function render() {
                var _props = this.props,
                    placeholderText = _props.placeholderText,
                    inputType = _props.inputType;

                return React.createElement('input', {
                    type: inputType,
                    placeholder: placeholderText,
                    className: this.configClasses(mergedComponentStyles) + ' ' + css(classes.input, classes.focus)
                });
            }
        }]);
        return component;
    }(React.Component), _class.propTypes = configSpec, _temp2);
    return {
        component: component,
        config: configSpec
    };
};

var index$1 = /*#__PURE__*/Object.freeze({
	factory: factory$1,
	defaultConfig: defaultConfig$1,
	name: name$1
});

var styles$2 = (function (name, _ref, _ref2) {
    var color = _ref.color,
        typography = _ref.typography;
    var textColor = _ref2.textColor,
        backgroundColor = _ref2.backgroundColor,
        borderColor = _ref2.borderColor,
        hoverTextColor = _ref2.hoverTextColor,
        hoverBackgroundColor = _ref2.hoverBackgroundColor,
        hoverBorderColor = _ref2.hoverBorderColor;

    var styles = {
        linkButton: {
            fontFamily: typography.fontFamily,
            backgroundColor: backgroundColor || color.primary,
            borderColor: borderColor || color.primary,
            color: textColor || 'white'
        },
        hover: {
            ':hover': {
                backgroundColor: hoverBackgroundColor || color.primary,
                borderColor: hoverBorderColor || color.primary,
                color: hoverTextColor || 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
            }
        }
    };

    return styles;
});

var name$2 = 'volComponentLinkButton';

var defaultConfig$2 = {
    linkButtonStyles: {
        textColor: '#fff',
        textTransform: 'uppercase',
        backgroundColor: '#333',
        borderColor: '#333',
        hoverTextColor: '#fff',
        hoverBackgroundColor: '#444',
        hoverBorderColor: '#444',
        borderThickness: 'basic',
        size: 'large',
        rounded: 'none',
        growOnHover: false
    }
};

var factory$2 = function factory(_ref, _ref2, globalStyles) {
    var React = _ref.React,
        ElementPropTypes = _ref.ElementPropTypes;

    var _class, _temp2;

    var StyleSheet = _ref2.StyleSheet,
        css = _ref2.css;

    var mergedComponentStyles = _extends({}, defaultConfig$2.linkButtonStyles, (globalStyles.globalComponents['volComponentLinkButton'] || {}).linkButtonStyles);
    var classes = StyleSheet.create(styles$2(name$2, globalStyles, mergedComponentStyles));

    var configSpec = {
        children: ElementPropTypes.array,
        linkButtonStyles: ElementPropTypes.shape({
            textColor: ElementPropTypes.color.isRequired,
            textTransform: ElementPropTypes.oneOf(['uppercase', 'none']).isRequired,
            backgroundColor: ElementPropTypes.color.isRequired,
            borderColor: ElementPropTypes.color.isRequired,
            hoverTextColor: ElementPropTypes.color,
            hoverBackgroundColor: ElementPropTypes.color,
            hoverBorderColor: ElementPropTypes.color,
            borderThickness: ElementPropTypes.oneOf(['basic', 'thin', 'thick', 'none']).isRequired,
            size: ElementPropTypes.oneOf(['small', 'medium', 'large', 'block']).isRequired,
            rounded: ElementPropTypes.oneOf(['none', 'small', 'medium', 'large', 'pill']).isRequired,
            growOnHover: ElementPropTypes.bool.isRequired
        })
    };

    var component = (_temp2 = _class = function (_React$Component) {
        inherits(component, _React$Component);

        function component() {
            var _ref3;

            var _temp, _this, _ret;

            classCallCheck(this, component);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref3 = component.__proto__ || Object.getPrototypeOf(component)).call.apply(_ref3, [this].concat(args))), _this), _this.configClasses = function (_ref4) {
                var textTransform = _ref4.textTransform,
                    borderThickness = _ref4.borderThickness,
                    size = _ref4.size,
                    rounded = _ref4.rounded,
                    growOnHover = _ref4.growOnHover;

                var base = 'link dib pointer';
                var borders = {
                    basic: 'ba bw1',
                    thin: 'ba',
                    thick: 'ba bw2',
                    none: 'bn'
                };
                var sizes = {
                    small: 'f7 ph2 pv1',
                    medium: 'f6 ph3 pv2',
                    large: 'f5 ph4 pv3',
                    block: 'f5 ph4 pv3 w-100 measure tracked'
                };
                var corners = {
                    none: 'br0',
                    small: 'br1',
                    medium: 'br2',
                    large: 'br3',
                    pill: 'br-pill'
                };
                var text = {
                    none: '',
                    uppercase: 'ttu'
                };
                var grow = growOnHover ? 'grow' : '';

                /* eslint-disable security/detect-object-injection */
                return base + ' ' + text[textTransform] + ' ' + borders[borderThickness] + ' ' + sizes[size] + ' ' + corners[rounded] + ' ' + grow;
                /* eslint-enable security/detect-object-injection */
            }, _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(component, [{
            key: 'render',
            value: function render() {
                var _props = this.props,
                    children = _props.children,
                    rest = objectWithoutProperties(_props, ['children']);

                return React.createElement(
                    'a',
                    _extends({
                        className: 'tc ' + this.configClasses(mergedComponentStyles) + ' ' + css(classes.linkButton, classes.hover)
                    }, rest),
                    children
                );
            }
        }]);
        return component;
    }(React.Component), _class.propTypes = configSpec, _temp2);

    return {
        component: component,
        config: configSpec
    };
};

var index$2 = /*#__PURE__*/Object.freeze({
	factory: factory$2,
	defaultConfig: defaultConfig$2,
	name: name$2
});

export { index as Button, index$1 as Input, index$2 as LinkButton };
