'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _setPrototypeOf = require('babel-runtime/core-js/object/set-prototype-of');

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinperBee = require('tinper-bee');

var _yyuapRef = require('yyuap-ref');

var _yyuapRef2 = _interopRequireDefault(_yyuapRef);

var _common = require('./common');

var _refOptions = require('./refOptions');

var _refOptions2 = _interopRequireDefault(_refOptions);

var _refWithInput = require('yyuap-ref/dist2/refWithInput');

var _refWithInput2 = _interopRequireDefault(_refWithInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _promise2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _promise2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    id: _propTypes2.default.string,
    appType: _propTypes2.default.string,
    filterRefUrl: _propTypes2.default.string,
    refCode: _propTypes2.default.string,
    properties: _propTypes2.default.object,
    onBpmFlowClick: _propTypes2.default.func,
    onStart: _propTypes2.default.func,
    onEnd: _propTypes2.default.func,
    onSuccess: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    onChangestate: _propTypes2.default.func
};

var BpmTaskApproval = function (_Component) {
    _inherits(BpmTaskApproval, _Component);

    function BpmTaskApproval(props) {
        var _this2 = this;

        _classCallCheck(this, BpmTaskApproval);

        var _this = _possibleConstructorReturn(this, (BpmTaskApproval.__proto__ || (0, _getPrototypeOf2.default)(BpmTaskApproval)).call(this, props));

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {
            if (_this.props.appType == "2") {
                _this.setState({
                    approvetype: "withdraw",
                    comment: (0, _common.approvetypeToText)("withdraw")
                }, function () {
                    _this.props.onChangestate(_this.state);
                });
            }
        };

        _this.handleChange = function (value) {
            _this.setState({
                approvetype: value,
                comment: (0, _common.approvetypeToText)(value),
                userName: "",
                userIds: [],
                userId: [],
                checkedArray: []
            }, function () {
                _this.props.onChangestate(_this.state);
            });
        };

        _this.handlerCommentChange = function (e) {
            _this.setState({ comment: e.target.value }, function () {
                _this.props.onChangestate(_this.state);
            }, function () {
                _this.props.onChangestate(_this.state);
            });
        };

        _this.activityModalClose = function () {
            _this.setState({
                rejectToActivityShow: false,
                rejectlist: [],
                selectedRow: []
            }, function () {
                _this.props.onChangestate(_this.state);
            });
        };

        _this.rejectToActivityOK = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
            var _this$props, onStart, onEnd, onSuccess, onError, rejectToBillMakerMsg;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this$props = _this.props, onStart = _this$props.onStart, onEnd = _this$props.onEnd, onSuccess = _this$props.onSuccess, onError = _this$props.onError;

                            onStart && onStart();
                            _context.next = 4;
                            return (0, _common.sendBpmTaskAJAX)('rejectToBillMaker', {
                                activityId: _this.state.activityId,
                                approvetype: _this.state.approvetype,
                                comment: _this.state.comment,
                                processInstanceId: _this.state.processInstanceId,
                                taskId: _this.state.taskId
                            }).catch(function (e) {
                                _tinperBee.Message.create({ content: '' + e.toString(), color: 'danger', position: 'top' });
                                onError && onError({
                                    type: 2,
                                    msg: '\u670D\u52A1\u5668\u8BF7\u6C42\u9519\u8BEF'
                                });
                            });

                        case 4:
                            rejectToBillMakerMsg = _context.sent;


                            if (rejectToBillMakerMsg.data.flag == 'success') {
                                onSuccess && onSuccess();
                                _tinperBee.Message.create({ content: '' + rejectToBillMakerMsg.data.msg, color: 'info', position: 'top' });
                                _this.setState({
                                    rejectToActivityShow: false,
                                    rejectlist: [],
                                    selectedRow: []
                                }, function () {
                                    _this.props.onChangestate(_this.state);
                                });
                            } else {
                                _tinperBee.Message.create({ content: '' + rejectToBillMakerMsg.data.msg, color: 'danger', position: 'top' });
                                onError && onError({
                                    type: 2,
                                    msg: rejectToBillMakerMsg.data.msg
                                });
                            }

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.handlerFlow = function () {
            var onBpmFlowClick = _this.props.onBpmFlowClick;
            onBpmFlowClick && onBpmFlowClick();
        };

        _this.getDataSource = function () {
            var arr = [{
                key: "同意",
                value: "agree"
            }];
            var _this$props$propertie = _this.props.properties,
                addsignAble = _this$props$propertie.addsignAble,
                rejectAble = _this$props$propertie.rejectAble,
                delegateAble = _this$props$propertie.delegateAble,
                unagreeable = _this$props$propertie.unagreeable;

            if (unagreeable) arr.push({ key: "不同意", value: "unagree" });
            if (rejectAble) arr.push({ key: "驳回到环节", value: "rejectToActivity" });
            if (addsignAble) arr.push({ key: "加签", value: "signAdd" });
            if (delegateAble) arr.push({ key: "改派", value: "delegate" });
            return arr;
        };

        _this.rejectToActivity = _asyncToGenerator(_regenerator2.default.mark(function _callee2() {
            var onError, result;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            onError = _this.props.onError;
                            _context2.next = 3;
                            return (0, _common.sendBpmTaskAJAX)(_this.state.approvetype, _this.state);

                        case 3:
                            result = _context2.sent;

                            if (result.data.flag == 'success' && result.data.rejectlist.length > 0) {
                                _this.setState({
                                    rejectlist: result.data.rejectlist,
                                    selectedRow: new Array(result.data.rejectlist.length),
                                    rejectToActivityShow: true
                                });
                            } else {
                                _tinperBee.Message.create({ content: result.data.msg || '当前环节为首环节，没有可以驳回的环节', color: 'warning', position: 'top' });
                                onError && onError({
                                    type: 2,
                                    msg: result.data.msg || '当前环节为首环节，没有可以驳回的环节'
                                });
                            }

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.state = {
            approvetype: "agree",
            comment: "审批同意",
            processDefinitionId: props.processDefinitionId,
            processInstanceId: props.processInstanceId,
            taskId: props.id,
            activityId: "",
            activityName: "",
            rejectToActivityShow: false,
            rejectlist: [],
            selectedRow: [],
            userIds: [],
            userId: [],
            userName: [],
            checkedArray: [],
            HuoDongID: "",
            HuoDongName: "" };

        _this.rejectToActivityCol = [{
            title: "活动编码",
            dataIndex: "activityId",
            key: "activityId",
            width: "40%"
        }, {
            title: "活动名称",
            dataIndex: "activityName",
            key: "activityName",
            width: "30%"
        }];
        return _this;
    }

    _createClass(BpmTaskApproval, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var self = this;
            var userRef = {
                title: self.state.approvetype === 'delegate' ? '改派人员选择' : "加签人员选择",
                backdrop: false,
                hasPage: true,
                refType: self.state.approvetype === 'delegate' ? 2 : 5,
                isRadio: self.state.approvetype === 'delegate',
                className: '',
                emptyBtn: true,
                param: {
                    refCode: self.state.approvetype === 'delegate' ? 'newuser' : 'userUnderOrgRef',
                    tenantId: '',
                    sysId: '',
                    transmitParam: 'EXAMPLE_CONTACTS,EXAMPLE_ORGANIZATION'
                },
                textOption: {
                    modalTitle: '选择加签人员',
                    leftTitle: '组织结构',
                    rightTitle: '人员列表',
                    leftTransferText: '待选人员',
                    rightTransferText: '已选人员'
                },

                checkedArray: self.state.checkedArray,
                onCancel: function onCancel(p) {
                    console.log(p);
                },

                onSave: function onSave(sels, showVal) {
                    var temp = sels.map(function (v) {
                        return v.id;
                    });

                    var userName = self.state.userName;
                    userName = showVal;

                    var userId = self.state.userIds;
                    userId = temp;
                    self.setState({
                        userId: userId[0],
                        userIds: userId,
                        userName: userName,
                        checkedArray: sels
                    }, function () {
                        self.props.onChangestate(self.state);
                    });
                },
                showVal: this.state.userName,
                showKey: 'refname',
                verification: false
            };
            return _react2.default.createElement(
                'div',
                { className: 'clearfix' },
                _react2.default.createElement(
                    'div',
                    { style: { "padding": "0px" } },
                    this.props.appType == "1" && _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _tinperBee.Row,
                            { style: {
                                    "margin": "8px 0",
                                    "padding": "0 10px"
                                } },
                            _react2.default.createElement(
                                _tinperBee.Col,
                                { md: 1, xs: 1, sm: 1, style: { "paddingLeft": 0, "paddingRight": '15px' } },
                                _react2.default.createElement(_tinperBee.Select, {
                                    style: { width: '100%' },
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    onChange: self.handleChange,
                                    defaultValue: 'agree',
                                    data: self.getDataSource()
                                })
                            ),
                            _react2.default.createElement(
                                _tinperBee.Col,
                                { md: 3, xs: 3, sm: 3, style: { "paddingLeft": 0 } },
                                this.state.approvetype === "signAdd" && _react2.default.createElement(_refWithInput2.default, { disabled: false, option: (0, _assign2.default)(JSON.parse(_refOptions2.default), userRef) }),
                                this.state.approvetype === "delegate" && _react2.default.createElement(_refWithInput2.default, { disabled: false, option: (0, _assign2.default)(JSON.parse(_refOptions2.default), userRef) }),
                                this.state.approvetype === "rejectToActivity" && _react2.default.createElement(_tinperBee.FormControl, {
                                    readOnly: true,
                                    placeholder: '请选择环节',
                                    value: this.state.activityName,
                                    onClick: this.rejectToActivity,
                                    onChange: this.onChange })
                            ),
                            _react2.default.createElement(
                                _tinperBee.Col,
                                { md: 4, mdOffset: 4, xs: 4, xsOffset: 4, sm: 4, smOffset: 4, style: { "textAlign": "right", "paddingRight": 0 } },
                                this.props.appType == "1" && _react2.default.createElement(
                                    _tinperBee.Button,
                                    { onClick: this.handlerFlow, colors: 'primary' },
                                    '\u6D41\u7A0B\u56FE'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _tinperBee.Row,
                            { style: {
                                    "padding": "0 10px"
                                } },
                            _react2.default.createElement(
                                _tinperBee.Col,
                                { md: 12 },
                                _react2.default.createElement('textarea', {
                                    style: {
                                        "height": "75px",
                                        "width": "100%",
                                        "outline": "none",
                                        "resize": "none",
                                        "border": "1px solid #cecece",
                                        "padding": "10px",
                                        "marginBottom": "20px",
                                        "borderRadius": "4px"
                                    },
                                    placeholder: '\u8BF7\u8F93\u5165\u5904\u7406\u610F\u89C1',
                                    value: this.state.comment,
                                    onChange: this.handlerCommentChange
                                })
                            )
                        )
                    ),
                    this.props.appType == "2" && _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _tinperBee.Row,
                            { style: {
                                    "height": "46px",
                                    "lineHeight": "46px",
                                    "padding": "0 10px"
                                } },
                            _react2.default.createElement(
                                _tinperBee.Col,
                                { md: 8 },
                                _react2.default.createElement(
                                    _tinperBee.Radio.RadioGroup,
                                    {
                                        name: 'approvetype',
                                        selectedValue: this.state.approvetype,
                                        onChange: this.handleChange },
                                    _react2.default.createElement(
                                        _tinperBee.Radio,
                                        { value: 'withdraw' },
                                        '\u5F03\u5BA1'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _tinperBee.Col,
                                { md: 4, style: { "textAlign": "right" } },
                                this.props.appType == "2" && _react2.default.createElement(
                                    _tinperBee.Button,
                                    { onClick: this.handlerFlow, colors: 'primary' },
                                    '\u6D41\u7A0B\u56FE'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _tinperBee.Row,
                            { style: {
                                    "padding": "0 10px"
                                } },
                            _react2.default.createElement(
                                _tinperBee.Col,
                                { md: 12 },
                                _react2.default.createElement('textarea', {
                                    style: {
                                        "height": "75px",
                                        "width": "100%",
                                        "outline": "none",
                                        "resize": "none",
                                        "border": "1px solid #cecece",
                                        "padding": "10px",
                                        "marginBottom": "20px",
                                        "borderRadius": "4px"
                                    },
                                    placeholder: '\u8BF7\u8F93\u5165\u5F03\u5BA1\u610F\u89C1',
                                    value: this.state.comment,
                                    onChange: this.handlerCommentChange
                                })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _tinperBee.Modal,
                    {
                        show: this.state.rejectToActivityShow,
                        backdrop: false,
                        onHide: this.activityModalClose },
                    _react2.default.createElement(
                        _tinperBee.Modal.Header,
                        { closeButton: true },
                        _react2.default.createElement(
                            _tinperBee.Modal.Title,
                            null,
                            ' \u6D3B\u52A8\u5217\u8868 '
                        )
                    ),
                    _react2.default.createElement(
                        _tinperBee.Modal.Body,
                        null,
                        _react2.default.createElement(_tinperBee.Table, {
                            rowKey: function rowKey(r) {
                                return r.activityId;
                            },
                            emptyText: function emptyText() {
                                return _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u6682\u65E0\u6570\u636E'
                                );
                            },
                            rowClassName: function rowClassName(record, index, indent) {
                                if (_this3.state.selectedRow[index]) {
                                    return 'selected';
                                } else {
                                    return '';
                                }
                            },
                            onRowClick: function onRowClick(record, index, indent) {
                                var selectedRow = new Array(_this3.state.rejectlist.length);
                                selectedRow[index] = true;
                                _this3.setState({
                                    activityId: record.activityId,
                                    activityName: record.activityName,
                                    selectedRow: selectedRow
                                }, function () {
                                    _this3.props.onChangestate(_this3.state);
                                });
                            },
                            columns: this.rejectToActivityCol, data: this.state.rejectlist })
                    ),
                    _react2.default.createElement(
                        _tinperBee.Modal.Footer,
                        null,
                        _react2.default.createElement(
                            _tinperBee.Button,
                            { colors: 'danger', style: { "marginRight": "10px" }, onClick: this.activityModalClose },
                            ' \u786E\u5B9A '
                        ),
                        _react2.default.createElement(
                            _tinperBee.Button,
                            { onClick: this.activityModalClose },
                            ' \u5173\u95ED '
                        )
                    )
                )
            );
        }
    }]);

    return BpmTaskApproval;
}(_react.Component);

BpmTaskApproval.propTypes = propTypes;
BpmTaskApproval.defaultProps = {
    appType: "1",
    refCode: "newuser",
    filterRefUrl: "/iuap_pap_quickstart/common/filterRef",
    properties: {
        addSignAble: true,
        iscopytouser: true,
        rejectAble: true,
        delegateAble: true,
        unagreeable: true,
        assignAble: true }
};

exports.default = BpmTaskApproval;