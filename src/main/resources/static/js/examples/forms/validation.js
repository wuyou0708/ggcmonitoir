$(function () {

    $('#exampleFullForm').formValidation($.po('formValidation', {
        'button': {
            'selector': '#validateButton1',
            'disabled': 'disabled'
        },
        'fields': {
            'username': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写用户名'
                    },
                    'stringLength': {
                        'min': 0x6,
                        'max': 0x1e,
                        'message': '请输入6-30位的字符串'
                    },
                    'regexp': {
                        'regexp': /^[a-zA-Z0-9]+$/,
                        'message': '请输入正确的字符串'
                    }
                }
            },
            'email': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写邮箱'
                    },
                    'emailAddress': {
                        'message': '邮箱格式错误'
                    }
                }
            },
            'password': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写密码'
                    },
                    'stringLength': {
                        'min': 0x8,
                        'message': '至少输入8位字符'
                    }
                }
            },
            'birthday': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写生日'
                    },
                    'date': {
                        'format': 'YYYY/MM/DD',
                        'message': '请输入正确的日期'
                    }
                }
            },
            'github': {
                'validators': {
                    'url': {
                        'message': '请填写URL'
                    }
                }
            },
            'skills': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写技能'
                    },
                    'stringLength': {
                        'max': 0x12c,
                        'message': '最多只能输入300个字符'
                    }
                }
            },
            'porto_is': {
                'validators': {
                    'notEmpty': {
                        'message': '请至少选择一项'
                    }
                }
            },
            'for[]': {
                'validators': {
                    'notEmpty': {
                        'message': '请至少选择一项'
                    }
                }
            },
            'company': {
                'validators': {
                    'notEmpty': {
                        'message': '请选择公司'
                    }
                }
            },
            'browsers': {
                'validators': {
                    'notEmpty': {
                        'message': '请选择浏览器'
                    }
                }
            }
        }
    }));
    $('#exampleConstraintsForm, #exampleConstraintsFormTypes').formValidation($.po('formValidation', {
        'fields': {
            'type_email': {
                'validators': {
                    'emailAddress': {
                        'message': '邮箱格式不正确'
                    }
                }
            },
            'type_url': {
                'validators': {
                    'url': {
                        'message': '链接格式错误'
                    }
                }
            },
            'type_digits': {
                'validators': {
                    'digits': {
                        'message': '输入值不是一个数'
                    }
                }
            },
            'type_numberic': {
                'validators': {
                    'integer': {
                        'message': '请输入数字'
                    }
                }
            },
            'type_phone': {
                'validators': {
                    'phone': {
                        'message': '请输入正确的手机号'
                    }
                }
            },
            'type_credit_card': {
                'validators': {
                    'creditCard': {
                        'message': '信用卡卡号错误'
                    }
                }
            },
            'type_date': {
                'validators': {
                    'date': {
                        'format': 'YYYY/MM/DD',
                        'message': '请输入正确的日期'
                    }
                }
            },
            'type_color': {
                'validators': {
                    'color': {
                        'type': ['hex', 'hsl', 'hsla', 'keyword', 'rgb', 'rgba'],
                        'message': '颜色值错误'
                    }
                }
            },
            'type_ip': {
                'validators': {
                    'ip': {
                        'ipv4': !![],
                        'ipv6': !![],
                        'message': 'IP格式有误'
                    }
                }
            }
        }
    }));
    $('#exampleStandardForm').formValidation($.po('formValidation', {
        'button': {
            'selector': '#validateButton2',
            'disabled': 'disabled'
        },
        'fields': {
            'standard_name': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写用户名'
                    }
                }
            },
            'standard_email': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写密码'
                    },
                    'emailAddress': {
                        'message': '请填写邮箱'
                    }
                }
            },
            'standard_content': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写内容'
                    },
                    'stringLength': {
                        'max': 0x1f4,
                        'message': '内容长度不能超过500个字符'
                    }
                }
            }
        }
    }));
    $('.summary-errors').hide();
    $('#exampleSummaryForm').formValidation($.po('formValidation', {
        'button': {
            'selector': '#validateButton3',
            'disabled': 'disabled'
        },
        'fields': {
            'summary_name': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写用户名'
                    }
                }
            },
            'summary_email': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写密码'
                    },
                    'emailAddress': {
                        'message': '请填写邮箱'
                    }
                }
            },
            'summary_content': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写内容'
                    },
                    'stringLength': {
                        'max': 0x1f4,
                        'message': '内容长度不能超过500个字符'
                    }
                }
            }
        }
    })).on('success.form.fv', function () {
        $('.summary-errors').html('');
    }).on('err.field.fv', function (_0x4c557b, _0x119566) {
        $('.summary-errors').show();
        $('.summary-errors').find('li[data-field="' + _0x119566.field + '"]').remove();
        _0x119566.element.data('fv.messages').find('.help-block[data-fv-for="' + _0x119566.field + '"]').hide();
    }).on('success.field.fv', function (_0x36a4fc, _0x183e1d) {
        $('.summary-errors > ul').find('li[data-field="' + _0x183e1d.field + '"]').remove();
        if ($('#exampleSummaryForm').data('formValidation').isValid()) {
            $('.summary-errors').hide();
        }
    });
});