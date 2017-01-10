window.hzmr = window.hzmr || [];
/************* Start spaceActions.js for locale en-US **************/
try {
    function showAddToMyGalleryForm(a) {}

    function showPostToForumForm(a, b) {}

    function showAprilFoolsDialog() {
        HZ.ui.Yamdi.show(HZ.spaceActions.AprilFoolsDialog)
    }

    function showEmbedDialog(a) {
        HZ.spaceActions.EmbedDialog.setSpaceId(a), HZ.ui.Yamdi.show(HZ.spaceActions.EmbedDialog)
    }
    HZ.ns("HZ.spaceActions"), HZ.spaceActions.QuestionDialog = new function() {
        function a() {
            return p == HZ.spaceActions.QuestionDialog.PRODUCT_TOPIC
        }

        function b(a) {
            var b = "questionDialog_" + a;
            w.children().each(function(a) {
                this.style.display = this.id == b ? "block" : "none"
            }), x.center()
        }

        function c() {
            x.hide(null)
        }

        function d() {
            b(r), HZ.ui.AjaxThrobber.setInCall(!0), HZ.spaceActions.getExistingQuestions(v, $.proxy(e, this))
        }

        function e(a) {
            HZ.ui.AjaxThrobber.setInCall(!1), a.success && (a[HZ.spaceActions.QuestionDialog.JSON_KEY_DAILY_QUESTIONS_QUOTA_EXCEEDED] || a[HZ.spaceActions.QuestionDialog.JSON_KEY_QUESTIONS].length > 0 ? f(a) : h())
        }

        function f(a) {
            for (var c = a[HZ.spaceActions.QuestionDialog.JSON_KEY_QUESTIONS], d = (a[HZ.spaceActions.QuestionDialog.JSON_KEY_SPACE_ID], a[HZ.spaceActions.QuestionDialog.JSON_KEY_DAILY_QUESTIONS_QUOTA_EXCEEDED]), e = "<ul>", f = 0; f < c.length; f++) {
                var g = c[f],
                    h = parseInt(g.numberOfAnswers, 10);
                switch (e += "<li><a href='javascript:HZ.spaceActions.QuestionDialog.openQuestionPage(" + g.questionId + ")'>" + g.title + "</a>", h > 0 && (e += " <span class='reply'>("), parseInt(g.numberOfAnswers, 10)) {
                    case 0:
                        break;
                    case 1:
                        e += _hgt("1 reply");
                        break;
                    default:
                        e += _hgt("{replyCount} replies", {
                            replyCount: g.numberOfAnswers
                        })
                }
                h > 0 && (e += ")</span>")
            }
            e += "</ul>", $("#questionsList").empty().append(e), $("#questionsListCaption")[0].style.display = c.length > 0 ? "block" : "none", $("#questionQuotaExceeded")[0].style.display = d ? "block" : "none", n[0].style.display = d ? "none" : "inline", b(s)
        }

        function g(a) {
            $("#questionFormError").empty().append(a), a ? $("#questionFormError").show() : $("#questionFormError").hide(), $("[placeholder]", "#askQuestionDialog").initPlaceHolders("refresh")
        }

        function h() {
            b(t)
        }

        function i() {
            if (!HZ.ui.AjaxThrobber.isInCall()) {
                $("#askQuestionDialog").trigger("submit.question");
                var a = UIHelper.trim(k.value),
                    b = UIHelper.trim(l.value);
                return "" == a ? g(_hgt("Please write your question.")) : (HZ.ui.AjaxThrobber.setInCall(!0), $("#space-action__submit-question-button").attr("disabled", "disabled"), HZ.ajaz.Services.postToForum(v, a, b, p, $.proxy(j, this))), !1
            }
        }

        function j(a) {
            if ($("#space-action__submit-question-button").removeAttr("disabled"), HZ.ui.AjaxThrobber.setInCall(!1), "true" == a.success) {
                var c = _hgt("More questions about your project or decor?");
                a[B] && (c = "<div class='overQuota'>" + _hgt("Please note: You have reached the maximum number of questions permitted per day.") + "</div>" + c), $("#askQuestionConfirmationMessage").empty().append(c), null != A && HZ.utils.Logger.sendEventLogOnce(A), b(u)
            } else HZ.ui.Yamdi.hide(this), HZ.ui.yamdi.Common.alert(a.error)
        }
        var k, l, m, n, o, p, q, r = 0,
            s = 1,
            t = 2,
            u = 3,
            v = null,
            w = null,
            x = null,
            y = !1,
            z = !1,
            A = null,
            B = "quotaReached";
        this.SPACE_TOPIC = 14, this.PRODUCT_TOPIC = 17, this.JSON_KEY_DAILY_QUESTIONS_QUOTA_EXCEEDED = null, this.JSON_KEY_SPACE_ID = null, this.JSON_KEY_QUESTIONS = null, p = this.SPACE_TOPIC;
        var C = _hgt("Ask a question about this photo.") + " ",
            D = _hgt("Ask a question about this product.") + " ",
            E = _hgt("Your question was posted."),
            F = _hgt("Write your question here. (ex: Love the chair! Where is it from?)"),
            G = _hgt("Write your question here. (ex: Love the chair! What is it made of?)"),
            H = "<div id='questionDialog_" + r + "'><div class='dialogTitle'>" + C + "</div><div class='dialogBody'><div class='dialogCenterCaption'>" + _hgt("Please wait...") + HZ.ui.AjaxThrobber.getThrobber() + "</div><div class='dialogControls'></div></div></div>",
            I = "<div id='questionDialog_" + s + "'><div class='dialogTitle'>" + C + "</div><div class='dialogBody'><div class='dialogStatus' id='questionQuotaExceeded'>" + _hgt("You've reached the maximum number of questions permitted per day. Please visit us again tomorrow if you have more questions.") + "</div><div class='dialogCaption' id='questionsListCaption'>" + _hgt("The answer you need may already be here:") + "</div><div class='dialogList' id='questionsList'></div><div class='dialogControls'></div></div></div>",
            J = "<div id='questionDialog_" + t + "'><div class='dialogTitle'>" + C + "</div><div class='dialogBody'><form id='askQuestionForm' name='postToForumForm' action='javascript:;'><div class='dialogStatus' id='questionFormError'></div><div><input class='form-control' id='askQuestionInputTitle' type='text' maxlength='70' placeholder='" + _hgt("Write your question here. (ex: Love the chair! Where is it from?)") + "'></div><div><textarea class='form-control' id='askQuestionInputComment' placeholder='" + _hgt("Tell us the details here.") + "'></textarea></div><div id='questionsGuidelines'><div id='questionGuidelinesBody'>" + _hgt("Pros on Houzz are encouraged but not obligated to answer questions.<br/>Polite questions are more likely to receive responses.") + "</div></div><input type='submit' style='display:none'/><div class='dialogControls'></div></form></div></div>",
            K = "<div id='questionDialog_" + u + "'><div class='dialogTitle'>" + E + "</div><div class='dialogBody'><div id='askQuestionConfirmationMessage' class='pll prl'></div><div class='dialogControls'></div></div></div>";
        this.init = function(a, b) {
            v = a
        }, this.setDelegate = function(a) {
            x = a
        }, this.setTrackingEventSource = function(a) {
            A = a
        }, this.setShowLinkOnNewWindow = function(a) {
            y = a
        }, this.setQuestionTopic = function(a) {
            p = a
        }, this.setQuestionUpsellLink = function(a) {
            q = a
        }, this.openQuestionPage = function(a) {
            var b = HZ.utils.Links.getQuestionLink(a);
            y ? window.open(b) : window.location = b
        }, this.getView = function() {
            if (!w) {
                w = $("<div id='askQuestionDialog'></div>").addClass("dialogFrame").append(H).append(I).append(J).append(K), m = HZ.ui.InputButtonUtils.createPrimaryInputButton(_hgt("Submit"), "space-action__submit-question-button", $.proxy(i, this)), n = HZ.ui.InputButtonUtils.createPrimaryInputButton(_hgt("I have another question"), "", $.proxy(h, this)), o = HZ.ui.InputButtonUtils.createPrimaryInputButton(_hgt("Go to Advice"), null, function() {
                    window.location.href = q
                }, null, null, "seeWorkButton"), $("body").append(w), $("#questionDialog_" + r + " .dialogControls", w).append(HZ.ui.InputButtonUtils.createSecondaryInputButton(_hgt("Cancel"), null, null, null, null, "cancelButton")), $("#questionDialog_" + s + " .dialogControls", w).append(HZ.ui.InputButtonUtils.createSecondaryInputButton(_hgt("Cancel"), null, null, null, null, "cancelButton")).append(n), $("#questionDialog_" + t + " .dialogControls", w).append(HZ.ui.AjaxThrobber.getThrobber()).append(HZ.ui.InputButtonUtils.createSecondaryInputButton(_hgt("Cancel"), null, null, null, null, "cancelButton")).append(m), $("#questionDialog_" + u + " .dialogControls", w).append(HZ.ui.InputButtonUtils.createSecondaryInputButton(_hgt("No Thanks"), null, null, null, null, "cancelButton")).append(o), $(".cancelButton", w).click($.proxy(c, this)), k = $("#askQuestionInputTitle")[0], $("#askQuestionInputTitle").charCount({
                    css: "counter text-xs",
                    counterElement: "div",
                    allowed: 70,
                    prewarning: 20,
                    warning: 10,
                    counterText: _hgt("Characters Left") + " "
                }), l = $("#askQuestionInputComment")[0]
            }
            return w
        }, this.viewLoaded = function() {
            g(""), k.value = "", $(k).trigger("change"), l.value = "", HZ.ui.AjaxThrobber.setInCall(!1), z ? $("[placeholder]", "#askQuestionDialog").initPlaceHolders("refresh") : (z = !0, $("[placeholder]", "#askQuestionDialog").initPlaceHolders({
                saveContainer: "#askQuestionDialog",
                saveEvent: "submit.question"
            }));
            var b = a() ? D : C;
            a() ? G : F;
            HZ.utils.Config.isResponsive && $("#askQuestionInputTitle").attr("placeholder", _hgt("Title")), $("#questionDialog_" + r + " .dialogTitle", w).html(b), $("#questionDialog_" + s + " .dialogTitle", w).html(b), $("#questionDialog_" + t + " .dialogTitle", w).html(b), a() ? $("#questionsGuidelines").hide() : $("#questionsGuidelines").show(), d()
        }, this.viewUnloaded = function() {}
    }, HZ.spaceActions.DontPrintDialog = new function() {
        var a = null,
            b = null,
            c = null,
            d = "photo",
            e = 15,
            f = "dpd_shown",
            g = "dpd_print",
            h = "mobileApps";
        this.setDelegate = function(a) {
            c = a
        }, this.lastInvokedDate = function() {
            return b
        }, this.setLastInvokedDate = function(a) {
            b = a
        }, this.setPrintSubject = function(a) {
            d = a
        }, this.getPrintSubject = function() {
            return d
        }, this.daysElapsedFromToday = function() {
            var a = this.currentDateAsTimestamp(),
                b = new Date(this.lastInvokedDate()),
                c = Math.abs(a - b);
            return Math.floor(c / 864e5)
        }, this.currentDateAsTimestamp = function() {
            var a = new Date;
            return a.getTime()
        }, this.checkUserPref = function(a, b, c) {
            if (!this.lastInvokedDate() || this.daysElapsedFromToday() > 1) {
                this.setPrintSubject(c), this.setLastInvokedDate(this.currentDateAsTimestamp()), HZ.ajaz.Services.updateUserPreferences(e, null, function(a) {}), HZ.utils.Logger.sendEventLog(f), HZ.ui.Yamdi.show(HZ.spaceActions.DontPrintDialog, null);
                var d = $("#continueToPrint");
                d && d.click(function(c) {
                    HZ.utils.Logger.sendEventLog(g), HZ.ui.Yamdi.hide(null), HZ.utils.Print.printUrl(a, b)
                })
            } else HZ.utils.Print.printUrl(a, b)
        }, this.getView = function() {
            if (!a) {
                var b = "",
                    c = "",
                    d = "";
                "photo" == this.getPrintSubject() ? (b = _hgt("Print Photo"), c = _hgt("Help the environment by sharing this photo another way:"), d = _hgt("No thanks. Please print this photo")) : (b = _hgt("Print Ideabook"), c = _hgt("Help the environment by sharing this ideabook another way:"), d = _hgt("No thanks. Please print this ideabook")), a = $("<div id='dontPrintDialog'>").addClass("dialogFrame").append("<div class='dialogTitle'><span id='dontPrintTitleIcon'></span>" + b + "</div><div class='dialogBody'><div class='dialogSection'><div class='dialog-section-header'>" + c + "</div><div id='emailSection' class='dialogSection-item'><div class='image-container'><a href='javascript:;' onclick=sendMail()> <div id='emailIcon'></div><p class='image-caption colorLink' href='javascript:;'>" + _hgt("Email{contextEmailVerb}", {
                    "context.emailVerb": ""
                }) + "</p><p class='secondary-caption'>" + _hgt("Send it now") + "</p></a></div></div><div id='downloadAppSection' class='dialogSection-item'><div class='image-container'><a href='" + HZ.utils.Links.getPageUrl(h) + "'><div id='downloadAppIcon'></div><p class='image-caption colorLink' href='javascript:;'>" + _hgt("Houzz App") + "</p><p class='secondary-caption'>" + _hgt("Take it with you") + "</p></a></div></div></div><div class='dialogControls'><a id='continueToPrint' class='colorLink' href='javascript:;'>" + d + "</a></div></div></div>"), $("body").append(a)
            }
            return a
        }, this.viewLoaded = function() {}, this.viewUnloaded = function() {}, sendMail = function() {
            HZ.ui.Yamdi.hide(null), "function" == typeof showSendEmailDialog ? showSendEmailDialog() : HZ.lb.plugins.SpaceActions.handleEmail()
        }
    }, HZ.spaceActions.PhotoOverlay = new function() {
        var a = null;
        this.getPromoView = function() {
            return a || (a = $("<div class='wrapper-block'><div class='wrapper-table'><div class='wrapper-cell'><div id='signup_overlay' class='promote' data-type='hover'><span class='likeIt icon-wrap'>" + _hgt("Save Photo") + "<span class='more-icon'></span></span><br/></div></div></div></div>")), a
        }, this.assembleOverlayElements = function() {
            var a = [];
            return null === HZ.data.CurrentSessionUser && a.push(this.getPromoView()), a
        }
    }, HZ.spaceActions.AprilFoolsClass = function() {
        function a() {
            this.getDelegate().hide(null)
        }
        var b = {
                "": HZ.utils.Config.siteBaseUrl + "/ideabooks/46342399",
                uk: HZ.utils.Config.siteBaseUrl + "/ideabooks/46510556",
                au: HZ.utils.Config.siteBaseUrl + "/ideabooks/46495938",
                ru: HZ.utils.Config.siteBaseUrl + "/ideabooks/46510315",
                de: HZ.utils.Config.siteBaseUrl + "/ideabooks/46510299",
                fr: HZ.utils.Config.siteBaseUrl + "/ideabooks/46511131/list/pt=61d4bbfda7043bdc1366aa98c362bbd1/houzzlenz-une-nouvelle-facon-de-voir-votre-interieur"
            },
            c = "HYIKDcMwreY",
            d = "<h1 class='header-1'>%MAIN_HEADER%						<a href='javascript:void(0);' onclick='HZ.spaceActions.AprilFoolsDialog.closeDiag(); return false;'><span class='closeButton hzi-font hzi-CloseX'></span></a>					</h1>					<h2 class='header-5 houzzlenz-subheader'>%SUB_HEADER%</h2>					<iframe width='640' height='385' src='%VIDEO_LINK%' allowTransparency='true' frameborder='0' webkitAllowFullScreen allowfullscreen></iframe>					<div class='ideabook-link-container'>						<a href='%HOUZZ_LENZ_IDEABOOK_LINK%' class='hzBtn primary ideabook-btn'>%IDEABOOK_LINK_LABEL%</a>					</div>";
        HZ.spaceActions.AprilFoolsClass.superclass.constructor.call(this), this.prepare = function() {
            var e = HZ.ui.InputButtonUtils.createPrimaryInputButton(_hgt("Done"), _hgt("cancel"), $.proxy(a, this)),
                f = $("<div>").append(HZ.utils.Html.template(d, {
                    SUB_HEADER: _hgt("The New Way To Design And Experience Your Home"),
                    HOUZZ_LENZ_IDEABOOK_LINK: b[HZ.utils.Config.currentSite],
                    VIDEO_LINK: "//www.youtube.com/embed/" + c + "?modestbranding=1&controls=1&showinfo=0&rel=0&fs=1&wmode=opaque",
                    IDEABOOK_LINK_LABEL: _hgt("Pre-order Now"),
                    MAIN_HEADER: _hgt("Announcing HouzzLenz")
                })),
                g = {
                    body: f,
                    dialogClassName: "embedPhotoDialog aprilFoolsDialog",
                    controls: [e],
                    onViewLoaded: $.proxy(this.onViewLoaded, this)
                };
            this.init(g)
        }, this.closeDiag = function() {
            $.proxy(a, this)()
        }
    }, HZ.extend(HZ.spaceActions.AprilFoolsClass, HZ.ui.yamdi.Dialog), HZ.spaceActions.AprilFoolsDialog = new HZ.spaceActions.AprilFoolsClass, HZ.spaceActions.AprilFoolsDialog.prepare(), HZ.spaceActions.EmbedDialogClass = function() {
        function a() {
            this.getDelegate().hide(null)
        }

        function b(a) {
            a.success && (c.val(a.largeImageEmbedCode), d.val(a.smallImageEmbedCode), shortcodeTextarea.val(a.wordpressShortcode))
        }
        var c, d, e = null,
            f = "buttonsAndBadges",
            g = "termsOfUse",
            h = "<div class='dialogCaption'>" + _hgt("Copy this code to embed this photo on your site:") + "</div><div class='dialogCaption' style='margin-top:10px;'>" + _hgt("Large Image (500 pixels):") + "</div><textarea onclick='this.select()' readonly='readonly' class='embedPhoto500 form-control'></textarea><div class='dialogCaption' style='margin-top:10px;'>" + _hgt("Small Image (320 pixels):") + "</div><textarea onclick='this.select()' readonly='readonly' class='embedPhoto320 form-control'></textarea><div class='dialogCaption' style='margin-top:10px;'>" + _hgt("WordPress <t1>Shortcode</t1>:", {
                t1: {
                    tag: "a",
                    attr: {
                        href: HZ.utils.Links.getPageUrl(f) + "#shortcode"
                    }
                }
            }) + "</div><textarea onclick='this.select()' readonly='readonly' class='embedShortcode form-control'></textarea><div class='dialogCaption' style='margin-top:10px;font-size:12px;color:#a4a4a4;'>" + _hgt('This tool is provided to you "as is" and subject to <t1>Houzz terms of use</t1>', {
                t1: {
                    tag: "a",
                    attr: {
                        href: HZ.utils.Links.getPageUrl(g),
                        target: "_blank"
                    }
                }
            }) + "</div>";
        HZ.spaceActions.EmbedDialogClass.superclass.constructor.call(this), this.prepare = function() {
            var b = HZ.ui.InputButtonUtils.createPrimaryInputButton(_hgt("Done"), _hgt("cancel"), $.proxy(a, this)),
                e = $("<div>").append(h);
            c = $(".embedPhoto500", e), d = $(".embedPhoto320", e), shortcodeTextarea = $(".embedShortcode", e);
            var f = {
                title: _hgt("Embed a Photo"),
                body: e,
                dialogClassName: "embedPhotoDialog",
                controls: [b],
                onViewLoaded: $.proxy(this.onViewLoaded, this)
            };
            this.init(f)
        }, this.setSpaceId = function(a) {
            e = a
        }, this.onViewLoaded = function() {
            c.val(""), d.val(""), shortcodeTextarea.val(""), HZ.ajaz.Services.getEmbedSpaceCode(e, $.proxy(b, this))
        }
    }, HZ.extend(HZ.spaceActions.EmbedDialogClass, HZ.ui.yamdi.Dialog), HZ.spaceActions.EmbedDialog = new HZ.spaceActions.EmbedDialogClass, HZ.spaceActions.EmbedDialog.prepare(), HZ.spaceActions.showAddToIdeabookDialog = function(a) {
        if (HZ.data.CurrentSessionUser) HZ.spaceActions.AddToIdeabookDialog.init(a), HZ.ui.Yamdi.show(HZ.spaceActions.AddToIdeabookDialog);
        else {
            var b = HZ.data.Spaces.get(a),
                c = null,
                d = window.location.href;
            b && b.iids && b.iids[0] && (c = b.iids[0]);
            var e = JSON.stringify({
                houseId: a,
                redirectUrl: d,
                imageId: c,
                buttonType: "ideabook"
            });
            HZ.ajaz.Services.setVisitorProperty("postSignupHouseId", e, function(a) {
                HZ.auth.Manager.signup(201, 13, d)
            })
        }
    }, HZ.spaceActions.showEmailDialog = function(a) {
        if (HZ.data.CurrentSessionUser) {
            if (HZ.data && HZ.data.Spaces) {
                var b = HZ.data.Spaces.get(a);
                b && (HZ.dialogs.EmailDialog.prepare({
                    type: HZ.sendEmail.types.SPACE,
                    referenceId: b.id,
                    subject: b.t,
                    message: b.prod ? HZ.sendEmail.texts.DEFAULT_MESSAGE_PRODUCT : HZ.sendEmail.texts.DEFAULT_MESSAGE_SPACE,
                    staticMessageData: b.prod && HZ.lb.Config.tradeUser ? HZ.lb.Config.tradeUser : !1
                }), HZ.ui.Yamdi.show(HZ.dialogs.EmailDialog))
            }
        } else {
            var b = HZ.data.Spaces.get(a),
                c = null,
                d = window.location.href;
            b && b.iids && b.iids[0] && (c = b.iids[0]);
            var e = JSON.stringify({
                houseId: a,
                redirectUrl: d,
                imageId: c,
                buttonType: "email"
            });
            HZ.ajaz.Services.setVisitorProperty("postSignupHouseId", e, function(a) {
                HZ.auth.Manager.signup(11, 17, d)
            })
        }
    }, HZ.spaceActions.Share = {
        GOOGLE_PLUS: HZ.utils.Config.socialSharePlatforms.googlePlus,
        FACEBOOK: HZ.utils.Config.socialSharePlatforms.facebook,
        TWITTER: HZ.utils.Config.socialSharePlatforms.twitter,
        LINKEDIN: HZ.utils.Config.socialSharePlatforms.linkedIn,
        VKONTAKTE: HZ.utils.Config.socialSharePlatforms.vkontakte,
        ODNOKLASSNIKI: HZ.utils.Config.socialSharePlatforms.odnoklassniki,
        LINE: HZ.utils.Config.socialSharePlatforms.line,
        openShareWindowForSpace: function(a, b) {
            var c, d, e, f, g, h = "",
                i = "";
            if (HZ.data && HZ.data.Spaces && (c = HZ.data.Spaces.get(b))) {
                if (d = HZ.utils.Links.getSpaceLinkWithSEO(c.id), e = c.t, i = c.c, a == this.FACEBOOK) {
                    var j = HZ.utils.Styles.getStyleUrl(c.s),
                        k = HZ.data.Categories.getCategoryById(c.cat),
                        l = c.ma,
                        m = HZ.data.Users.get(c.ow);
                    j && (e += " - " + j), k && (e += " - " + k.name), l && (e += " - " + l), m && (e += _hgt(" - by {owner}", {
                        owner: m.d
                    })), h = "", f = HZ.utils.Links.getFbFeedRedirectLink(), g = "popup"
                }
                this.openShareWindow(a, d, e, h, f, g, i)
            }
        },
        openShareWindow: function(a, b, c, d, e, f, g) {
            var h;
            switch (g || (g = ""), a) {
                case this.FACEBOOK:
                    h = "https://www.facebook.com/dialog/feed?app_id=" + HZ.utils.Config.fbAppId + "&link=" + encodeURIComponent(b) + "&caption=" + encodeURIComponent(d) + "&name=" + encodeURIComponent(c) + "&redirect_uri=" + encodeURIComponent(e) + "&display=" + encodeURIComponent(f) + "&description=" + encodeURIComponent(g);
                    break;
                case this.TWITTER:
                    h = "http://twitter.com/intent/tweet?url=" + encodeURIComponent(b) + "&text=" + encodeURIComponent(c);
                    break;
                case this.GOOGLE_PLUS:
                    h = "https://plus.google.com/share?url=" + encodeURIComponent(b);
                    break;
                case this.LINKEDIN:
                    h = "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(b) + "&title=" + encodeURIComponent(c) + "&summary=" + encodeURIComponent(d);
                    break;
                case this.VKONTAKTE:
                    h = "http://vkontakte.ru/share.php?url=" + encodeURIComponent(b) + "&title=" + encodeURIComponent(c) + "&description=" + encodeURIComponent(g);
                    break;
                case this.ODNOKLASSNIKI:
                    h = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=" + encodeURIComponent(b) + "&st.title=" + encodeURIComponent(c) + "&st.comments=" + encodeURIComponent(g);
                    break;
                case this.LINE:
                    h = "http://line.me/R/msg/text/?" + encodeURIComponent(c) + "%0D%0A" + encodeURIComponent(b)
            }
            h && window.open(h, "lbShare" + a, "height=600,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
        },
        EventBinder: new function() {
            this.init = function(a) {
                a.spaceId && this.setSpaceId(a.spaceId), a.$element && this.initShareButtons(a.$element)
            }, this.setSpaceId = function(a) {
                this.spaceId = a
            }, this.initShareButtons = function(a) {
                a && a.on("click", ".icon-socialshare", $.proxy(this.onShareButtnClick, this))
            }, this.onShareButtnClick = function(a) {
                var b = $(a.currentTarget),
                    c = this.spaceId;
                "undefined" == typeof c && (c = b.data("id")), HZ.spaceActions.Share.openShareWindowForSpace(b.data("social"), c)
            }
        },
        populateToGallerySelect: function(a, b) {
            var c, d, e, f, g, h, i, j, k = HZ.spaceActions.AddToIdeabookDialog.getGalleries();
            j = $(a), k && (d = k.recent, c = d.length), c > 0 && HZ.ui.Utils.addOptionGroupToSelect(j, _hgt("Recently Used:"), -1, "recentIdeabooks");
            for (var l = 0; c > l; l++) g = d[l], i = g.featured ? " (" + _hgt("Featured") + ")" : "", h = g.id == b, HZ.ui.Utils.addOptionToGroupSelect(j, g.title + i, g.id, h, "recentIdeabooks");
            HZ.ui.Utils.addOptionGroupToSelect(j, _hgt("Your Ideabooks:"), -1, "yourIdeabooks"), k && (e = k.own, c = e.length);
            for (var l = 0; c > l; l++) g = e[l], i = g.featured ? " (" + _hgt("Featured") + ")" : "", h = g.id == b, HZ.ui.Utils.addOptionToGroupSelect(j, g.title + i, g.id, h, "yourIdeabooks");
            k && (f = k.shared, c = f.length), c > 0 && HZ.ui.Utils.addOptionGroupToSelect(j, _hgt("Shared Ideabooks:"), -1, "sharedIdeabooks");
            for (var l = 0; c > l; l++) g = f[l], h = g.id == b, HZ.ui.Utils.addOptionToGroupSelect(j, g.title + _hgt("(Shared)"), g.id, h, "sharedIdeabooks")
        }
    };

    window.hzmr.push("spaceActions:2470");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End spaceActions.js  **************/
/************* Start socialSdk.js for locale en-US **************/
try {
    HZ.ns("HZ.sns"), HZ.sns.JsSdk = {
        fb: {},
        google: {},
        loader: {}
    }, HZ.sns.JsSdk.fb.init = function() {}, HZ.sns.JsSdk.fb.setFbTokenExpiration = function() {}, HZ.sns.JsSdk.fb.isFbTokenExpired = function() {}, HZ.sns.JsSdk.fb.getFbAccessToken = function() {}, HZ.sns.JsSdk.loader.loadThirdPartyJsSdk = function() {}, HZ.sns.JsSdk.loader.loadThirdPartyJsSdkFIF = function() {}, HZ.sns.JsSdk.loader.loadOnDocumentReady = function() {}, HZ.sns.JsSdkConstants = {}, HZ.sns.JsSdkConstants.STATUS_NOT_LOADED = 1, HZ.sns.JsSdkConstants.STATUS_LOADING = 2, HZ.sns.JsSdkConstants.STATUS_LOADED = 3, HZ.sns.JsSdkConstants.FB = 1, HZ.sns.JsSdkConstants.GOOGLE = 2, HZ.sns.JsSdkConstants.TW = 3, HZ.sns.JsSdkConstants.VK = 4, HZ.sns.JsSdkConstants.OD = 5, HZ.sns.JsSdkConstants.LINE = 6, HZ.sns.JsSdkController = {}, HZ.sns.JsSdkController.sdkLoaded = {}, HZ.sns.JsSdkController.sdkConfig = {}, HZ.sns.JsSdkController.sdkConfig[HZ.sns.JsSdkConstants.FB] = {
        url: HZ.utils.Config.fbJsLibUrl,
        id: "facebook-jssdk"
    }, HZ.sns.JsSdkController.sdkConfig[HZ.sns.JsSdkConstants.GOOGLE] = {
        url: "https://apis.google.com/js/platform.js",
        id: "gplatform-js"
    }, HZ.sns.JsSdkController.sdkConfig[HZ.sns.JsSdkConstants.TW] = {
        url: "//platform.twitter.com/widgets.js",
        id: "twitter-wjs"
    }, HZ.sns.JsSdkController.sdkConfig[HZ.sns.JsSdkConstants.VK] = {
        url: "http://vkontakte.ru/js/api/openapi.js",
        id: "vk-js"
    }, HZ.sns.JsSdkController.sdkConfig[HZ.sns.JsSdkConstants.OD] = {
        url: "https://connect.ok.ru/connect.js",
        id: "od-js"
    }, HZ.sns.JsSdkController.sdkConfig[HZ.sns.JsSdkConstants.LINE] = null, HZ.sns.JsSdkController.sdkStatus = {}, HZ.sns.JsSdkController.sdkStatus[HZ.sns.JsSdkConstants.FB] = HZ.sns.JsSdkConstants.STATUS_NOT_LOADED, HZ.sns.JsSdkController.sdkStatus[HZ.sns.JsSdkConstants.GOOGLE] = HZ.sns.JsSdkConstants.STATUS_NOT_LOADED, HZ.sns.JsSdkController.sdkStatus[HZ.sns.JsSdkConstants.TW] = HZ.sns.JsSdkConstants.STATUS_NOT_LOADED, HZ.sns.JsSdk.loader.loadThirdPartyJsSdk = function(a) {
        if (a)
            for (Object.prototype.toString.call(a) !== Object.prototype.toString.call([]) && (a = [a]); a.length;) {
                var b = a.shift(),
                    c = HZ.sns.JsSdkController.sdkConfig[b];
                if (c) {
                    var d = c.url,
                        e = c.id;
                    b == HZ.sns.JsSdkConstants.FB && (HZ.tmpFbLoader.addFbRootDiv(), window.fbAsyncInit || (window.fbAsyncInit = function() {
                            HZ.tmpFbLoader.requireInitialization(null), $(document).trigger("fbJsLoaded")
                        })),
                        function(a, c, e) {
                            var f, g = a.getElementsByTagName(c)[0];
                            a.getElementById(e) || (f = a.createElement(c), f.id = e, f.src = d, f.onload = function(a) {
                                return function() {
                                    HZ.sns.JsSdk.loader.onLibLoad(a)
                                }
                            }(b), g.parentNode.insertBefore(f, g))
                        }(document, "script", e)
                }
            }
    }, HZ.sns.JsSdk.loader.onLibLoad = function(a) {
        HZ.sns.JsSdkController.sdkStatus[a] = HZ.sns.JsSdkConstants.STATUS_LOADED, a == HZ.sns.JsSdkConstants.GOOGLE && HZ.sns.JsSdk.google.initiateAuth()
    }, HZ.sns.JsSdk.loader.loadThirdPartyJsSdkFIF = function(a) {
        if (a) {
            Object.prototype.toString.call(a) !== Object.prototype.toString.call([]) && (a = [a]);
            var b, c, d, e, f = !1,
                g = window,
                h = document.createElement("iframe");
            h.src = "javascript:false", h.title = "", (h.frameElement || h).style.cssText = "position: absolute; left: -10000px; top: -10000px; width: 0; height: 0; border: 0", e = document.getElementsByTagName("script"), e = e[e.length - 1], e.parentNode.insertBefore(h, e);
            try {
                b = h.contentWindow, d = b.document
            } catch (i) {
                c = document.domain, h.src = "javascript:var d=document.open();d.domain='" + c + "';void(0);", b = h.contentWindow, d = b.document
            }
            if (Array.prototype.indexOf) f = -1 !== a.indexOf(HZ.sns.JsSdkConstants.FB);
            else
                for (var j = a.length, k = 0; j >= k; k++)
                    if (a[k] === HZ.sns.JsSdkConstants.FB) {
                        f = !0;
                        break
                    }
            f && HZ.tmpFbLoader.addFbRootDiv(), f && !window.fbAsyncInit && (window.fbAsyncInit = function() {
                HZ.sns.JsSdkController.sdkStatus[HZ.sns.JsSdkConstants.FB] = HZ.sns.JsSdkConstants.STATUS_LOADED, HZ.tmpFbLoader.requireInitialization(null), $(document).trigger("fbJsLoaded")
            }), d.open()._l = function() {
                for (; a.length;) {
                    var d = a.shift();
                    if (HZ.sns.JsSdkController.sdkStatus[d] === HZ.sns.JsSdkConstants.STATUS_NOT_LOADED) {
                        HZ.sns.JsSdkController.sdkStatus[d] = HZ.sns.JsSdkConstants.STATUS_LOADING;
                        var e = HZ.sns.JsSdkController.sdkConfig[d],
                            f = e.id;
                        if (!this.getElementById(f)) {
                            b.inDapIF = !0;
                            var h = this.createElement("script");
                            c && (this.domain = c), f && (h.id = f), h.readyState ? h.onreadystatechange = function(a) {
                                return function() {
                                    ("loaded" == h.readyState || "complete" == h.readyState) && (h.onreadystatechange = null, HZ.sns.JsSdkController.sdkStatus[a] = HZ.sns.JsSdkConstants.STATUS_LOADED, a === HZ.sns.JsSdkConstants.TW ? (g.twttr = g.twttr || b.twttr || {}, g.twttr && g.twttr.widgets.load(g.document.getElementById("shareList"))) : a === HZ.sns.JsSdkConstants.GOOGLE && (g.gapi = g.gapi || b.gapi || {}, g.gapi && (b.gapi = g.gapi, g.___gcfg = b.___gcfg = {
                                        lang: "en-US",
                                        parsetags: "explicit"
                                    }, g.gapi.plus.go(g.document.getElementById("shareList")))))
                                }
                            }(d) : h.onload = function(a) {
                                return function() {
                                    HZ.sns.JsSdkController.sdkStatus[a] = HZ.sns.JsSdkConstants.STATUS_LOADED, a === HZ.sns.JsSdkConstants.TW ? (g.twttr = g.twttr || b.twttr || {}, g.twttr && g.twttr.widgets.load(g.document.getElementById("shareList"))) : a === HZ.sns.JsSdkConstants.GOOGLE && (g.gapi = g.gapi || b.gapi || {}, g.gapi && (b.gapi = g.gapi, g.___gcfg = b.___gcfg = {
                                        lang: "en-US",
                                        parsetags: "explicit"
                                    }, g.gapi.plus.go(g.document.getElementById("shareList"))))
                                }
                            }(d), h.src = e.url, this.body.appendChild(h)
                        }
                    }
                }
            }, d.write('<body onload="document._l();">'), d.close()
        }
    }, HZ.sns.JsSdk.loader.loadOnDocumentReady = function(a) {
        $(document).ready(this.loadThirdPartyJsSdk(a))
    }, HZ.tmpGoogleLoader = new function() {
        var a = null;
        this.initiateAuth = function() {
            gapi.load("auth2", function() {
                a = gapi.auth2.init({
                    client_id: HZ.utils.Config.googleClientId,
                    cookiepolicy: "single_host_origin",
                    fetch_basic_profile: !1,
                    scope: "profile email"
                })
            })
        }, this.requestGoogleAuth = function(b, c, d) {
            a.grantOfflineAccess(d).then(b, c)
        }
    }, HZ.tmpGoogleLoader && (HZ.sns.JsSdk.google = HZ.tmpGoogleLoader), HZ.tmpFbLoader = new function() {
        function a(a) {
            if (k = a, a)
                if ("connected" == a.status) {
                    l = !0, i = a.authResponse.accessToken, e = a.authResponse.userID;
                    var b = .001 * (new Date).getTime();
                    j = b + parseInt(a.authResponse.expiresIn, 10)
                } else l = "not_authorized" == a.status ? !0 : !1
        }

        function b(a) {
            HZ.sns.JsSdk.fb.graphApi("/me", function(b) {
                b.first_name && (f = b.first_name), b.last_name && (g = b.last_name), b.email && (h = b.email), "function" == typeof a && a()
            })
        }
        var c = "" + HZ.utils.Config.fbAppId,
            d = !1,
            e = null,
            f = null,
            g = null,
            h = null,
            i = null,
            j = 0,
            k = null,
            l = !1,
            m = HZ.utils.Links.getPicUrl("channel.html");
        this.setFbAppId = function(a) {
            c = a
        }, this.getFbAppId = function() {
            return c
        }, this.isFbLoggedIn = function() {
            return l
        }, this.getFbUserId = function() {
            return e
        }, this.getFbLastName = function() {
            return g
        }, this.getFbFirstName = function() {
            return f
        }, this.getFbEmail = function() {
            return h
        }, this.getFbAccessToken = function() {
            return i
        }, this.init = function(a) {
            a && "function" == typeof a && (d ? a() : $(document).bind("fbJsLoaded", a))
        }, this.addFbRootDiv = function() {
            if (!document.getElementById("fb-root")) {
                var a = document.body.firstChild,
                    b = document.createElement("div");
                b.id = "fb-root", document.body.insertBefore(b, a)
            }
        }, this.setFbTokenExpiration = function(a) {
            j = a
        }, this.getFbTokenExpiration = function() {
            return j
        }, this.isFbTokenExpired = function() {
            var a = .001 * (new Date).getTime();
            return a > j
        }, this.requireInitialization = function(a) {
            if (HZ.sns.JsSdkController.sdkStatus[HZ.sns.JsSdkConstants.FB] != HZ.sns.JsSdkConstants.STATUS_LOADED && a) return HZ.sns.JsSdk.fb.init(function() {
                a.callee.apply(HZ.sns.JsSdk.fb, a)
            }), HZ.sns.JsSdkController.sdkStatus[HZ.sns.JsSdkConstants.FB] == HZ.sns.JsSdkConstants.STATUS_NOT_LOADED && HZ.sns.JsSdk.loader.loadOnDocumentReady(HZ.sns.JsSdkConstants.FB), !1;
            if (!d) {
                var b = {
                    appId: c,
                    status: !1,
                    cookie: !0,
                    xfbml: !0,
                    channelUrl: m
                };
                "" != HZ.utils.Config.fbApiVersion && (b.version = "v" + HZ.utils.Config.fbApiVersion), FB.init(b), d = !0
            }
            return !0
        }, this.getFbAuthResponse = function() {
            return k
        }, this.requestFbAuth = function(c, d, e, f, g) {
            if (this.requireInitialization(arguments)) {
                c || (c = HZ.utils.Config.fbDefaultScope);
                var h = {
                    scope: c
                };
                g && (h = $.extend(h, g)), FB.login(function(c) {
                    a(c), c && "connected" == c.status ? f ? b(d) : "function" == typeof d && d() : "function" == typeof e && e()
                }, h)
            }
        }, this.graphApi = function(a, b) {
            FB.api(a, b)
        }, this.getFbLoginStatus = function(b) {
            this.requireInitialization(arguments), k ? "function" == typeof b && b(k) : FB.getLoginStatus(function(c) {
                a(c), "function" == typeof b && b(c)
            })
        }, this.postToFeed = function(a, b, c, d, e) {
            var f = {
                    method: "feed",
                    redirect_uri: e,
                    link: a,
                    picture: d,
                    name: b,
                    caption: "",
                    description: c
                },
                g = function(a) {};
            FB.ui(f, g)
        }
    }, HZ.tmpFbLoader && (HZ.sns.JsSdk.fb = HZ.tmpFbLoader);

    window.hzmr.push("socialSdk:2470");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End socialSdk.js  **************/
/************* Start siteAuth.js for locale en-US **************/
try {
    HZ.ns("HZ.auth"), HZ.auth.LoginWrapperDialog = new function() {
        function a(a) {
            var b = "loginWrapperDialog_" + a;
            c.children().each(function(a) {
                this.style.display = this.id == b ? "block" : "none"
            }), d.center()
        }
        var b = 0,
            c = null,
            d = null,
            e = null,
            f = null,
            g = null;
        this.show = function(a, b, c, d) {
            this.init(a), f = c ? c : 824, g = d ? d : 473, HZ.ui.Yamdi.show(this, b)
        }, this.init = function(a) {
            e = a
        }, this.setDelegate = function(a) {
            d = a
        }, this.getView = function() {
            return c || (c = $("<div id='loginWrapperDialog'></div>").addClass("dlgWrapperFrame").append("<div id='loginWrapperDialog_" + b + "'><iframe id='loginWrapperDialog_" + b + "_frame' scrolling='no' frameborder='0' allowtransparency='false' style='border: medium none; overflow: hidden;'></iframe></div>"), $("body").append(c)), $("#loginWrapperDialog").css("width", f + "px"), $("#loginWrapperDialog").css("height", g + "px"), $("#loginWrapperDialog_" + b + "_frame").css("width", f + "px"), $("#loginWrapperDialog_" + b + "_frame").css("height", g + "px"), c
        }, this.viewLoaded = function() {
            e ? encodeURIComponent(e) : "";
            document.getElementById("loginWrapperDialog_" + b + "_frame").src = HZ.utils.Config.secureUrl + e, a(b)
        }, this.viewUnloaded = function() {
            $("#loginWrapperDialog").remove(), c = null, param = null
        }
    }, HZ.auth.Manager = new function() {
        function a(a) {
            var b = new Array;
            for (var c in a) "u" == c ? b.push(encodeURIComponent(c.toString()) + "=" + HZ.utils.Links.base64Encode(a[c].toString())) : b.push(encodeURIComponent(c.toString()) + "=" + encodeURIComponent(a[c].toString()));
            var d = b.join("/");
            return d
        }

        function b() {
            t = null, v = null, x = null, z = null, A = null, B = null, L = !1, M = !1, N = !1, O = !1, P = !1, S = null
        }

        function c() {
            x || (x = top.location.href.toString());
            var b = "";
            switch (z) {
                case "signup":
                    b = U;
                    break;
                case "signin":
                default:
                    b = V
            }
            var c = {
                u: x,
                d: t
            };
            if (A && (c.username = A), B && (c.m = B), F && (c.t = F), E && (c.ft = E), I && (c.s = I), M && (c.fl = M), O && (c.f = 1), S) {
                var d = Math.floor(.001 * (new Date).getTime() - R) + Q;
                c.rt = HZ.utils.Links.base64Encode(d + "," + S)
            }
            var e = b + "/" + a(c);
            return e
        }

        function d() {
            var a = c();
            P ? window.open(a) : top.location = a
        }

        function e() {
            window.location = c()
        }

        function f() {
            HZ.auth.LoginWrapperDialog.show(c(), "function" == typeof v ? v : null, 480, 480)
        }

        function g() {
            if (!_) {
                _ = new HZ.ui.yamdi.Dialog;
                var a = HZ.ui.InputButtonUtils.createPrimaryInputButton(_hgt("Continue"), "", function() {
                    var a = $("#missingEmailInput").val();
                    a ? (HZ.auth.Manager.setDefaultEmail(a), n()) : h(_, _hgt("Please enter an email address to complete your sign up:"))
                });
                _.init({
                    title: _hgt("Complete Your Signup"),
                    dialogClassName: "missingEmail",
                    controls: [a]
                }), _.setBody('<div class="container-fluid"><div class="mbl">' + _hgt("Please enter your email address to finish signing up.") + '</div><div class="form-group mbs"><label for="missingEmailInput" class="control-label"></label><input type="email" class="form-control" id="missingEmailInput" placeholder="' + _hgt("For example, yourname@email.com") + '"></div></div>')
            }
            return _
        }

        function h(a, b) {
            var c = a.getBody();
            c.find("div.form-group").removeClass("has-error"), c.find("label.control-label").text(_hgt("Email{contextEmailNoun}", {
                contextEmailNoun: ""
            })), c.find("input#missingEmailInput").val(A), b && (c.find("div.form-group").addClass("has-error"), c.find("label.control-label").text(_hgt(b)))
        }

        function i(a) {
            HZ.ui.yamdi.Common.hideAllDialogs();
            var b = g();
            h(b, a), HZ.ui.Yamdi.show(b)
        }

        function j() {
            var a = HZ.signup.newPostSignup.init(function() {
                HZ.auth.Manager.loginComplete()
            }, function() {
                HZ.ui.yamdi.Common.hideAllDialogs(), HZ.ui.yamdi.Common.loading(_hgt("Please wait...")), HZ.ajaz.Services.proSignup(function() {
                    var a = HZ.auth.Manager.getCreateProProfileUrl();
                    top.location = a
                })
            });
            HZ.ui.yamdi.Common.hideAllDialogs();
            var b = new HZ.ui.yamdi.Dialog;
            b.init({
                title: "",
                dialogClassName: "userTypesDialog",
                controls: []
            }), b.setBody(a), HZ.ui.Yamdi.show(b)
        }

        function k(a) {
            a = a || {}, u ? t = "mobile" : (t || (t = "web"), a.displayMode && (t = a.displayMode)), a.callback && (v = a.callback), a.redirectUrl && (x = a.redirectUrl), a.screen && (z = a.screen), a.email && (A = a.email), a.messageId && (B = a.messageId), a.source && (F = a.source), F && !H && (H = F), a.hideFbLinking && (L = a.hideFbLinking), a.layout && (M = a.layout), a.hideLoadingDialog && (N = a.hideLoadingDialog), a.reauthenticate && (O = a.reauthenticate), a.openInNewWindow && (P = a.openInNewWindow), a.rtEvent && (S = a.rtEvent), a.googleAccountLinking && (Y = a.googleAccountLinking), a.googleAccountLinkingCallback && (Z = a.googleAccountLinkingCallback)
        }

        function l() {
            HZ.sns.JsSdk.fb.getFbAccessToken() && n()
        }

        function m() {
            _gaq.push(["_trackEvent", "LoginDialog", "SignUp", G]), HZ.utils.Gtm.pushData("sign_up")
        }

        function n() {
            N || (HZ.ui.yamdi.Common.hideAllDialogs(), HZ.ui.yamdi.Common.loading(_hgt("Connecting with Facebook..."))), x || (x = top.location.href), HZ.ajaz.Services.fbSignUp(HZ.auth.Manager.externalSignUpHandler, x, A, !1, O)
        }

        function o() {
            "function" == typeof v && v(!1)
        }

        function p(a) {
            N || (HZ.ui.yamdi.Common.hideAllDialogs(), HZ.ui.yamdi.Common.loading(_hgt("Connecting with Google..."))), x || (x = top.location.href), $.isEmptyObject(a) || (Y ? HZ.ajaz.Services.enableGoogleLogin(Z, a.code) : HZ.ajaz.Services.googleSignUp(HZ.auth.Manager.externalSignUpHandler, a.code, x, !1))
        }

        function q() {}

        function r(a) {
            var b = !1;
            x = !1, w = !1, a && a[HZ.ajaz.Authorize.JSON_KEY_REDIRECT_URL] && (x = a[HZ.ajaz.Authorize.JSON_KEY_REDIRECT_URL]), a && a.success && "true" == a.success ? (a[HZ.ajaz.Authorize.JSON_KEY_CREATE_PRO_PROFILE_URL] && (y = a[HZ.ajaz.Authorize.JSON_KEY_CREATE_PRO_PROFILE_URL]), a[HZ.ajaz.Authorize.JSON_KEY_SURL] && (b = a[HZ.ajaz.Authorize.JSON_KEY_SURL]), a.newUser && (J = !0, m()), w = !0) : (C = _hgt("We're sorry, but an unexpected error has occurred.  Please try again."), a && (a.errorMessage && (C = a.errorMessage), a.error && (D = a.error)));
            var c = function() {
                "function" == typeof v && v(w)
            };
            b ? HZ.ajaz.Services.setSession(b, c) : c()
        }
        var s = null,
            t = null,
            u = !1,
            v = null,
            w = !1,
            x = null,
            y = null,
            z = null,
            A = null,
            B = null,
            C = "",
            D = null,
            E = null,
            F = null,
            G = "signup success",
            H = null,
            I = null,
            J = !1,
            K = !0,
            L = !1,
            M = !1,
            N = !1,
            O = !1,
            P = !1,
            Q = null,
            R = null,
            S = null,
            T = !1,
            U = "/signup",
            V = "/signin",
            W = null,
            X = "",
            Y = !1,
            Z = null,
            _ = null;
        ADD_USER_EMAIL_EXISTS = 7, ERROR_FB_MISSING_EMAIL = 27, ERROR_GOOGLE_MISSING_EMAIL = 28, this.setIsMobile = function(a) {
            u = a
        }, this.setDisplayMode = function(a) {
            t = a
        }, this.setSignupBaseUrl = function(a) {
            U = a
        }, this.setSigninBaseUrl = function(a) {
            V = a
        }, this.setSupportUrl = function(a) {
            W = a
        }, this.getDisplayMode = function() {
            return t
        }, this.setUserId = function(a) {
            s = a
        }, this.getUserId = function() {
            return s
        }, this.isUserCreated = function() {
            return J
        }, this.getScreen = function() {
            return z
        }, this.setSignupLabel = function(a) {
            G = a
        }, this.setSignupSource = function(a) {
            H = a
        }, this.getSignupSource = function() {
            return H
        }, this.setSourcePage = function(a) {
            I = a
        }, this.getSourcePage = function(a) {
            return I
        }, this.setServerStartTime = function(a) {
            Q = a
        }, this.getMessageId = function() {
            return B
        }, this.getErrorMsg = function() {
            return C
        }, this.getErrorCode = function() {
            return D
        }, this.setDefaultEmail = function(a) {
            A = a
        }, this.setShowFbWelcome = function(a) {
            K = a
        }, this.setDefaultFbLoginScope = function(a) {
            T = a
        }, this.getRedirectUrl = function() {
            return x
        }, this.getCreateProProfileUrl = function() {
            return y
        }, this.setGoogleScopes = function(a) {
            X = a.join(" ")
        }, this.loginComplete = function() {
            "function" == typeof v ? v(w) : s && (x ? top.location = x : top.location.reload())
        }, this.externalSignUpHandler = function(a) {
            if (w = !1, a && "true" === a.success) {
                w = !0, s = a.uid;
                var b = !1;
                a[HZ.ajaz.Authorize.JSON_KEY_REDIRECT_URL] && (x = a[HZ.ajaz.Authorize.JSON_KEY_REDIRECT_URL]), a[HZ.ajaz.Authorize.JSON_KEY_CREATE_PRO_PROFILE_URL] && (y = a[HZ.ajaz.Authorize.JSON_KEY_CREATE_PRO_PROFILE_URL]), a[HZ.ajaz.Authorize.JSON_KEY_SURL] && (b = a[HZ.ajaz.Authorize.JSON_KEY_SURL]), a.newUser ? (J = !0, m()) : HZ.utils.Gtm.pushData("sign_in");
                var c = function() {
                    a.newUser && "mobile" != t && K ? j() : (N || HZ.ui.yamdi.Common.hideAllDialogs(), HZ.auth.Manager.loginComplete())
                };
                b ? HZ.ajaz.Services.setSession(b, c) : c()
            } else a && a.error == ADD_USER_EMAIL_EXISTS && !L ? (A = a.email, z = "signin", "g" === a.operation ? B = 10 : (B = 1, E = "x"), e()) : !a || a.error != ERROR_FB_MISSING_EMAIL && a.error != ERROR_GOOGLE_MISSING_EMAIL ? N || (HZ.ui.yamdi.Common.hideAllDialogs(), HZ.ui.yamdi.Common.alert(_hgt("We're sorry, please refresh and try again!"), _hgt("We're sorry, but we encountered an unexpected issue - likely this page has timed out due to inactivity.  Please refresh this page and try again.<br/><br/>If you continue to have trouble logging in please contact us at {supportUrl} for assistance.", {
                supportUrl: W
            }))) : i(A ? _hgt("Please double-check the email address below:") : null)
        }, this.fbLoginAuthorizedUser = function(a) {
            a || (a = {
                hideFbLinking: !0
            }), k(a), "undefined" != typeof FB && n()
        }, this.fbLogin = function(a) {
            k(a);
            var b = !1;
            a.reauthenticate && (b = {
                auth_type: "reauthenticate"
            }, a.fbNonce && (b.auth_nonce = a.fbNonce)), HZ.sns.JsSdk.fb.requestFbAuth(T, l, o, !1, b)
        }, this.loadGoogleLoginOptions = function(a) {
            var b = {};
            return b.app_package_name = HZ.utils.Config.androidPackageName, b.scope = X, b.redirect_uri = "postmessage", b
        }, this.googleLogin = function(a) {
            k(a), HZ.sns.JsSdk.google.requestGoogleAuth(p, q, this.loadGoogleLoginOptions(a))
        }, this.emailSignup = function(a, b, c, d, e, f, g, h) {
            v = h, HZ.ajaz.Services.signup(a, b, c, d, e, f, g, r)
        }, this.fbLoginLazyLoad = function() {
            HZ.sns.JsSdk.loader.loadOnDocumentReady(HZ.sns.JsSdkConstants.FB)
        }, this.googleLoginLazyLoad = function() {
            HZ.sns.JsSdk.loader.loadOnDocumentReady(HZ.sns.JsSdkConstants.GOOGLE)
        }, this.login = function(a) {
            if (b(), k(a), s) return void loginComplete();
            switch (t) {
                case "dialog":
                    f();
                    break;
                case "mobile":
                case "web":
                    d()
            }
        }, this.signup = function(a, b, c, d, e) {
            c || (c = top.location.href.toString());
            var f = {
                screen: "signup",
                redirectUrl: c,
                source: a
            };
            b && (f.messageId = b), d && (f.callback = d), e && e.displayMode && "dialog" == e.displayMode && UIHelper.isIE7 && (e.displayMode = "web"), e && (f = $.extend(f, e)), HZ.auth.Manager.login(f)
        }, this.signin = function(a, b, c) {
            b || (b = top.location.href.toString());
            var d = {
                screen: "signin",
                redirectUrl: b
            };
            a && (d.messageId = a), c && (d.callback = c), HZ.auth.Manager.login(d)
        }, R = .001 * (new Date).getTime()
    };

    window.hzmr.push("siteAuth:2470");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End siteAuth.js  **************/