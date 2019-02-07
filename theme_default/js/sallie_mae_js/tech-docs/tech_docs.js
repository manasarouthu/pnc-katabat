/* DOCUMENT READY FUNCTIONS */
$(document).ready(function () {
    tokens();
    footnotes();
    if (document.getElementById("top_nav") != null) {
        snapon("nav_main_");
    }
    if (document.getElementById("left_nav") != null) {
        list_nav("left_nav");
    }
    if (document.getElementById("search") != null) {
        defaultvalue();
    }
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}
);
/* End DOCUMENT READY FUNCTIONS */

/* TOP NAV SNAP ON */
function snapon(menu) {
    var section = new Array();
    section[0] = "/techdocs/guarantors/";
    section[1] = "/techdocs/schools/";
    section[2] = "/techdocs/lenders/";


    for (i = 0; i < 6; i++) {
        var menuitem = document.getElementById(menu + i);
        if (urlpath.indexOf(section[i]) != -1) {
            if (menuitem.className.indexOf('url_off') != -1) {
                menuitem.className = menuitem.className.replace(/(?:^|\s)url_off(?!\S)/g, ' url_on ');
                break;
            }
            else {
                menuitem.className = menuitem.className.replace(/(?:^|\s)url_on(?!\S)/g, ' url_off ');
                break;
            }
        }
    }
}
/* End TOP NAV SNAP ON */

/* OPINION LAB */
/* OnlineOpinion (F3cS,8448b) */
/* This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. */
var custom_var, O_tmoff = 360000, _sp = '%3A\\/\\/', _rp = '%3A//', _poE = 0.0, _poX = 0.0, _fb = 0, _xs, _ys, _sticky = 0, _sticky_x = 0, _sticky_y = 0, _top = 0, _stop = 0, _sH = screen.height, _d = document, _w = window, _ua = navigator.userAgent.toLowerCase(), _uav = 0, _ht = escape(_w.location.href), _hr = _d.referrer, _tm = (new Date()).getTime(), _kp = 0, _sW = screen.width, _vS = 'visible', _vH = 'hidden', _hdn = 0, _rz = 0, O_pxc, O_pyc, _ofx = _d.all ? -34 : -65 + (_ua.indexOf('safari') > -1 ? 31 : 15), _ofy = -52, _alk = '<a href=\'javascript:{_fW(_ht,1);_hdn=1;O_LC();_Sh(\"O_c\",0)}\' onMouseOver=\'_Ps(\"O_c\",_Gd(\"O_o\",0)-91,_Gd(\"O_o\",1)-39);_Sh(\"O_o\",0);_Sh(\"O_c\",1)\' onMouseOut=\'_Sh(\"O_c\",0);_Sh(\"O_o\",1);return 1\'>'; _w.onresize = O_Rz; function O_Rz() { O_Move(1) }; _d.onkeypress = _fK; function _fK(_e) { if (!_e) _e = _w.event; var _k = (typeof _e.which == 'number') ? _e.which : _e.keyCode; if ((_kp == 15 && _k == 12)) _w.open('https://secure.opinionlab.com/pageviewer/pv_controlboard.html?url=' + _fC(_ht), 'PageViewer', 'height=529,width=705,screenX=' + ((_sW - 705) / 2) + ',screenY=' + ((_sH - 529) / 2) + ',top=' + ((_sH - 529) / 2) + ',left=' + ((_sW - 705) / 2) + ',status=yes,toolbar=no,menubar=no,location=no,resizable=yes'); _kp = _k }; function _fC(_u) { _aT = _sp + ',\\/,\\.,-,_,' + _rp + ',%2F,%2E,%2D,%5F'; _aA = _aT.split(','); for (i = 0; i < 5; i++) { eval('_u=_u.replace(/' + _aA[i] + '/g,_aA[i+5])') } return _u }; function O_LC() { _w.open('https://secure.opinionlab.com/ccc01/comment_card.asp?time1=' + _tm + '&time2=' + (new Date()).getTime() + '&prev=' + _fC(escape(_hr)) + '&referer=' + _fC(_ht) + '&height=' + _sH + '&width=' + _sW + '&custom_var=' + custom_var, 'comments', 'width=535,height=192,screenX=' + ((_sW - 535) / 2) + ',screenY=' + ((_sH - 192) / 2) + ',top=' + ((_sH - 192) / 2) + ',left=' + ((_sW - 535) / 2) + ',resizable=yes,copyhistory=yes,scrollbars=no') }; function _fPe() { if (Math.random() >= 1.0 - _poE && _fR(_MD4(_ht)) == '') { _fW(_ht, 1); O_LC(); _poX = 0.0 } }; function _fPx() { if (Math.random() >= 1.0 - _poX && _fR(_MD4(_ht)) == '') { _fW(_ht, 1); O_LC() } }; window.onunload = _fPx; function _Pd(i) { return _d.getElementById ? _d.getElementById(i) : (_d.all ? _d.all[i] : (_d.layers ? _d.layers[i] : null)) }; if (_d.all) { _b = _d.body; strict = false; var _td = document.doctype; strict = (document.compatMode == 'CSS1Compat'); strict = (_td && _td.systemId ? (_td.systemId.indexOf('strict') > -1 ? true : (_td.publicId.indexOf('transitional') > -1 ? true : false)) : (_td && _td.publicId.indexOf('transitional') == -1 ? true : strict)); strict = (_td && _td.name.indexOf('.dtd') > -1) ? true : strict; if (strict) _b = _d.documentElement }; function _Gd(i, s) { g = _Pd(i); if (g) { if (s) { return g.offsetTop } else { return g.offsetLeft + (_uav < 1 ? 1 : 0) + (_uav <= 1.4 ? 10 : 0) + (_uav == 1.4 ? -1 : 0) } } }; function _Sh(i, s) { g = _Pd(i); if (g) { i = s ? (_hdn ? _vH : _vS) : _vH; _d.getElementById ? (g.style.visibility = i) : (_d.all ? g.style.display = i : (_d.layers ? g.visibility = i : null)) } }; function _Ps(i, x, y) { var g = _Pd(i); }; function O_PosW(O_fst, O_ly) { ly_w = 0; if (!_d.all) { return (_sticky && _sticky_x != -1 ? _sticky_x : (_w.innerWidth + self.pageXOffset)) + O_fst - ly_w } else { return (_sticky && _sticky_x != -1 ? _sticky_x : (_b.clientWidth + _b.scrollLeft)) + O_fst } }; function O_PosH(O_fst, O_ly) { ly_h = 0; if (!_d.all) { return (_sticky && _sticky_y != -1 ? _sticky_y : (_w.innerHeight + self.pageYOffset)) + O_fst - ly_h } else { return (_sticky && _sticky_y != -1 ? _sticky_y : (_b.clientHeight + _b.scrollTop)) + O_fst } }; function O_Moved() { if (_d.all) { O_rc = ((_b.scrollLeft != O_pxc) || (_b.scrollTop != O_pyc)); O_pxc = _b.scrollLeft; O_pyc = _b.scrollTop; return O_rc } else { O_rc = ((self.pageXOffset != O_pxc) || (self.pageYOffset != O_pyc)); O_pxc = self.pageXOffset; O_pyc = self.pageYOffset; return O_rc } }; function O_Move(O_fr) { if (O_Moved() || O_fr) { _Ps('O_o', O_PosW((_fb ? -50 + _ofx : _ofx), _d.O_o), O_PosH(_ofy, _d.O_o)); } otimerID = setTimeout('O_Move(0)', 100) }; function O_GoC(_p) { if (_ua.indexOf('gecko')) { _uav = parseFloat(_ua.substr(_ua.indexOf('; rv:') + 5, _ua.indexOf(') gecko/') - _ua.indexOf('; rv:') + 5)) }; if ((navigator.userAgent.indexOf('Opera 6') != -1) || (navigator.userAgent.indexOf('Opera/6') != -1) || (navigator.appVersion.indexOf('MSIE 4.') != -1) || document.layers || (_ua.indexOf("mac_powerpc") > -1 && _ua.indexOf("msie") > -1)) return; _xs = _top ? 91 : (_fb ? 91 : 119); _ys = _top ? 0 : 39; if (!_d.layers) { if (_fR(_MD4(escape(_w.location.href))) == '') { _d.write('<div id=\'O_o\' style=\'z-index:999;visibility:' + (_hdn ? _vH : _vS) + '\' onMouseOver=\'_Ps(\"O_c\",_Gd(\"O_o\",0)-' + _xs + ',_Gd(\"O_o\",1)-' + _ys + ');if(!_stop){_Sh(\"O_o\",0);_Sh(\"O_c\",1)}\'>' + _p + '</td></tr></table></div>'); O_Move(1) } } }; var hex_chr = '0123456789abcdef', _c = _d.cookie; function rhex(num) { var _s = ''; for (var j = 0; j <= 3; j++) _s += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) + hex_chr.charAt((num >> (j * 8)) & 0x0F); return _s }; function str2blks_MD5(_s) { var nblk = ((_s.length + 8) >> 6) + 1, blks = new Array(nblk * 16); for (var i = 0; i < nblk * 16; i++) blks[i] = 0; for (var i = 0; i < _s.length; i++) blks[i >> 2] |= _s.charCodeAt(i) << ((i % 4) * 8); blks[i >> 2] |= 0x80 << ((i % 4) * 8); blks[nblk * 16 - 2] = _s.length * 8; return blks }; function _fSa(x, y) { var lsw = (x & 0xFFFF) + (y & 0xFFFF), msw = (x >> 16) + (y >> 16) + (lsw >> 16); return (msw << 16) | (lsw & 0xFFFF) }; function rol(num, cnt) { return (num << cnt) | (num >>> (32 - cnt)) }; function cmn(q, a, b, x, s, t) { return _fSa(rol(_fSa(_fSa(a, q), _fSa(x, t)), s), b) }; function _fF(a, b, c, d, x, s) { return cmn((b & c) | ((~b) & d), a, 0, x, s, 0) }; function _fG(a, b, c, d, x, s) { return cmn((b & c) | (b & d) | (c & d), a, 0, x, s, 1518500249) }; function _fH(a, b, c, d, x, s) { return cmn(b ^ c ^ d, a, 0, x, s, 1859775393) }; function _MD4(_s) { var x = str2blks_MD5(_s), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878; for (var i = 0; i < x.length; i += 16) { var olda = a, oldb = b, oldc = c, oldd = d; a = _fF(a, b, c, d, x[i + 0], 3); d = _fF(d, a, b, c, x[i + 1], 7); c = _fF(c, d, a, b, x[i + 2], 11); b = _fF(b, c, d, a, x[i + 3], 19); a = _fF(a, b, c, d, x[i + 4], 3); d = _fF(d, a, b, c, x[i + 5], 7); c = _fF(c, d, a, b, x[i + 6], 11); b = _fF(b, c, d, a, x[i + 7], 19); a = _fF(a, b, c, d, x[i + 8], 3); d = _fF(d, a, b, c, x[i + 9], 7); c = _fF(c, d, a, b, x[i + 10], 11); b = _fF(b, c, d, a, x[i + 11], 19); a = _fF(a, b, c, d, x[i + 12], 3); d = _fF(d, a, b, c, x[i + 13], 7); c = _fF(c, d, a, b, x[i + 14], 11); b = _fF(b, c, d, a, x[i + 15], 19); a = _fG(a, b, c, d, x[i + 0], 3); d = _fG(d, a, b, c, x[i + 4], 5); c = _fG(c, d, a, b, x[i + 8], 9); b = _fG(b, c, d, a, x[i + 12], 13); a = _fG(a, b, c, d, x[i + 1], 3); d = _fG(d, a, b, c, x[i + 5], 5); c = _fG(c, d, a, b, x[i + 9], 9); b = _fG(b, c, d, a, x[i + 13], 13); a = _fG(a, b, c, d, x[i + 2], 3); d = _fG(d, a, b, c, x[i + 6], 5); c = _fG(c, d, a, b, x[i + 10], 9); b = _fG(b, c, d, a, x[i + 14], 13); a = _fG(a, b, c, d, x[i + 3], 3); d = _fG(d, a, b, c, x[i + 7], 5); c = _fG(c, d, a, b, x[i + 11], 9); b = _fG(b, c, d, a, x[i + 15], 13); a = _fH(a, b, c, d, x[i + 0], 3); d = _fH(d, a, b, c, x[i + 8], 9); c = _fH(c, d, a, b, x[i + 4], 11); b = _fH(b, c, d, a, x[i + 12], 15); a = _fH(a, b, c, d, x[i + 2], 3); d = _fH(d, a, b, c, x[i + 10], 9); c = _fH(c, d, a, b, x[i + 6], 11); b = _fH(b, c, d, a, x[i + 14], 15); a = _fH(a, b, c, d, x[i + 1], 3); d = _fH(d, a, b, c, x[i + 9], 9); c = _fH(c, d, a, b, x[i + 5], 11); b = _fH(b, c, d, a, x[i + 13], 15); a = _fH(a, b, c, d, x[i + 3], 3); d = _fH(d, a, b, c, x[i + 11], 9); c = _fH(c, d, a, b, x[i + 7], 11); b = _fH(b, c, d, a, x[i + 15], 15); a = _fSa(a, olda); b = _fSa(b, oldb); c = _fSa(c, oldc); d = _fSa(d, oldd); } return rhex(a) + rhex(b) + rhex(c) + rhex(d) }; function _fR(n) { i = 0; while (i < _c.length) { j = i + n.length; if (_c.substring(i, j) == n) { k = _c.indexOf(';', j); return unescape(_c.substring(j + 1, (k == -1) ? _c.length : k)) } i++ } return '' }; function _fW(n, v) { _d.cookie = 'oo_r=' + _fR('oo_r').replace(eval('/' + escape(_MD4(n)) + '~1:/g'), '') + escape(_MD4(n)) + '~' + escape(v) + ':;path=/;expires=' + (new Date((new Date()).getTime() + O_tmoff)).toGMTString() }

/* OnlineOpinion (F3cS,en-US) */
/* This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. */
var O_pth = '../../../images/', O_color = 'black', O_tmoff = 3600000; _aLg = new Array("en-US", "", "Please click here to give us feedback.", "Comments?", "0"); O_lang = _aLg[4]; O_pth += _aLg[0] + '/'; O_pth += O_color;
_top = 0; _fb = 1; O_GoC('<table cellspacing="0" cellpadding="0" border="0"><tr><td align="center" style="text-align:center"><a href="#" onMouseOver="_stop=0" onMouseOut="_stop=1;_Sh(\'O_c\',0);_Sh(\'O_o\',1);return 1"><img src="' + O_pth + '_oo.gif" border="0" width="19" height="17" alt="' + _aLg[1] + '" title="' + _aLg[1] + '"></a></td></tr><tr><td align="center" style="text-align:center"><a href="#" onMouseOver="_stop=1" onMouseOut="_stop=1;_Sh(\'O_c\',0);_Sh(\'O_o\',1);return 1"><img src="' + O_pth + '_fb_' + _aLg[0] + '.gif" border="0"></a></td></tr></table></div><br><div id="O_c" style="visibility:hidden;z-index:999"><table cellpadding="0" cellspacing="0" border="0" valign="top" align="left" width="138"><tr><td>' + _alk + '<img src="' + O_pth + '_popns_' + _aLg[0] + '.gif" alt="' + _aLg[2] + '" title="' + _aLg[2] + '" border="0" width="115" height="56"></a>' + _alk + '<img src="' + O_pth + '_dot.gif" alt="" title="" width="4" height="17" border="0"><img src="' + O_pth + '_comment.gif" alt="' + _aLg[3] + '" title="' + _aLg[3] + '" border="0" width="19" height="17"></a>');

/* End OPINION LAB */

/* CLEARSALEING */
csExecuteShoppingCart(); csExecuteTracker(); function csExecuteShoppingCart() { try { if (typeof (csSalesStageCode) != 'undefined' || typeof (csItems) != 'undefined') { csGenShoppingCartData = ''; if (typeof (csOrderSubTotal) != 'undefined') { csGenShoppingCartData += cs_b('ost', csOrderSubTotal, 'S') } if (typeof (csOrderTotal) != 'undefined') { csGenShoppingCartData += cs_b('ot', csOrderTotal, 'S') } if (typeof (csOrderDiscount) != 'undefined') { csGenShoppingCartData += cs_b('dc', csOrderDiscount, 'S') } if (typeof (csOrderNum) != 'undefined') { csGenShoppingCartData += cs_b('on', csOrderNum, 'S') } if (typeof (csNumOfItems) != 'undefined') { csGenShoppingCartData += cs_b('noi', csNumOfItems, 'S') } if (typeof (csItems) != 'undefined') { csGenShoppingCartData += cs_b('i', csItems, 'A') } if (typeof (csIds) != 'undefined') { csGenShoppingCartData += cs_b('ids', csIds, 'A') } if (typeof (csCodes) != 'undefined') { csGenShoppingCartData += cs_b('c', csCodes, 'A') } if (typeof (csQtys) != 'undefined') { csGenShoppingCartData += cs_b('q', csQtys, 'A') } if (typeof (csPrice) != 'undefined') { csGenShoppingCartData += cs_b('p', csPrice, 'A') } if (typeof (csCosts) != 'undefined') { csGenShoppingCartData += cs_b('pcs', csCosts, 'A') } if (typeof (csExternalItemIds) != 'undefined') { csGenShoppingCartData += cs_b('pi', csExternalItemIds, 'A') } if (typeof (csCustKey) != 'undefined') { csGenShoppingCartData += cs_b('ck', csCustKey, 'S') } if (typeof (csName) != 'undefined') { csGenShoppingCartData += cs_b('n', csName, 'S') } if (typeof (csAddress1) != 'undefined') { csGenShoppingCartData += cs_b('a', csAddress1, 'S') } if (typeof (csAddress2) != 'undefined') { csGenShoppingCartData += cs_b('a1', csAddress2, 'S') } if (typeof (csCsz) != 'undefined') { csGenShoppingCartData += cs_b('csz', csCsz, 'S') } if (typeof (csPhone) != 'undefined') { csGenShoppingCartData += cs_b('ph', csPhone, 'S') } if (typeof (csCity) != 'undefined') { csGenShoppingCartData += cs_b('ct', csCity, 'S') } if (typeof (csState) != 'undefined') { csGenShoppingCartData += cs_b('st', csState, 'S') } if (typeof (csPostalCode) != 'undefined') { csGenShoppingCartData += cs_b('pc', csPostalCode, 'S') } if (typeof (csEmail) != 'undefined') { csGenShoppingCartData += cs_b('e', csEmail, 'S') } if (typeof (csShipping) != 'undefined') { csGenShoppingCartData += cs_b('sh', csShipping, 'S') } if (typeof (csTax) != 'undefined') { csGenShoppingCartData += cs_b('tx', csTax, 'S') } if (typeof (csCategoryPath) != 'undefined') { csGenShoppingCartData += cs_b('cpth', csCategoryPath, 'S') } if (typeof (csCategoryPathId) != 'undefined') { csGenShoppingCartData += cs_b('cpthi', csCategoryPathId, 'S') } if (typeof (csOrderType) != 'undefined') { csGenShoppingCartData += cs_b('otp', csOrderType, 'S') } if (typeof (csEstimatedValue) != 'undefined') { csGenShoppingCartData += cs_b('ev', csEstimatedValue, 'S') } if (typeof (csSalesStageCode) != 'undefined') { csGenShoppingCartData += cs_b('ss', csSalesStageCode, 'S') } if (typeof (csHearAboutUs) != 'undefined') { csGenShoppingCartData += cs_b('hr', csHearAboutUs, 'S') } if (typeof (csDescription) != 'undefined') { csGenShoppingCartData += cs_b('ds', csDescription, 'S') } if (typeof (csEstimatedValue) != 'undefined') { csGenShoppingCartData += cs_b('ev', csEstimatedValue, 'S') } if (typeof (csCompanyName) != 'undefined') { csGenShoppingCartData += cs_b('cn', csCompanyName, 'S') } if (typeof (csFirstName) != 'undefined') { csGenShoppingCartData += cs_b('fn', csFirstName, 'S') } if (typeof (csMiddleName) != 'undefined') { csGenShoppingCartData += cs_b('mn', csMiddleName, 'S') } if (typeof (csLastName) != 'undefined') { csGenShoppingCartData += cs_b('ln', csLastName, 'S') } if (typeof (csJobTitle) != 'undefined') { csGenShoppingCartData += cs_b('jt', csJobTitle, 'S') } if (typeof (csSalutation) != 'undefined') { csGenShoppingCartData += cs_b('sa', csSalutation, 'S') } if (typeof (csWebsiteURL) != 'undefined') { csGenShoppingCartData += cs_b('wu', csWebsiteURL, 'S') } if (typeof (csFax) != 'undefined') { csGenShoppingCartData += cs_b('fx', csFax, 'S') } if (typeof (csPager) != 'undefined') { csGenShoppingCartData += cs_b('pg', csPager, 'S') } if (typeof (csCountryCode) != 'undefined') { csGenShoppingCartData += cs_b('cc', csCountryCode, 'S') } if (typeof (csFullAddress) != 'undefined') { csGenShoppingCartData += cs_b('fa', csFullAddress, 'S') } if (typeof (csLeadSubType) != 'undefined') { csGenShoppingCartData += cs_b('lst', csLeadSubType, 'S') } if (typeof (csLeadScore) != 'undefined') { csGenShoppingCartData += cs_b('ls', csLeadScore, 'S') } if (typeof (csChannel) != 'undefined') { csGenShoppingCartData += cs_b('cl', csChannel, 'S') } if (typeof (csPaymentType) != 'undefined') { csGenShoppingCartData += cs_b('pt', csPaymentType, 'S') } if (typeof (csLocationCode) != 'undefined') { csGenShoppingCartData += cs_b('lc', csLocationCode, 'S') } if (typeof (csLocationName) != 'undefined') { csGenShoppingCartData += cs_b('lo', csLocationName, 'S') } if (typeof (csLocationType) != 'undefined') { csGenShoppingCartData += cs_b('lp', csLocationType, 'S') } if (typeof (csPaymentTerm) != 'undefined') { csGenShoppingCartData += cs_b('pr', csPaymentTerm, 'S') } if (typeof (csVehYear) != 'undefined') { csGenShoppingCartData += cs_b('vy', csVehYear, 'S') } if (typeof (csVehMake) != 'undefined') { csGenShoppingCartData += cs_b('vm', csVehMake, 'S') } if (typeof (csVehModel) != 'undefined') { csGenShoppingCartData += cs_b('vo', csVehModel, 'S') } if (typeof (csTireCode) != 'undefined') { csGenShoppingCartData += cs_b('tc', csTireCode, 'S') } if (typeof (csTireVehicleClass) != 'undefined') { csGenShoppingCartData += cs_b('vc', csTireVehicleClass, 'S') } if (typeof (csTireWidth) != 'undefined') { csGenShoppingCartData += cs_b('tw', csTireWidth, 'S') } if (typeof (csTireAspectRatio) != 'undefined') { csGenShoppingCartData += cs_b('ta', csTireAspectRatio, 'S') } if (typeof (csTireRimDiameter) != 'undefined') { csGenShoppingCartData += cs_b('rd', csTireRimDiameter, 'S') } if (typeof (csTireConstruction) != 'undefined') { csGenShoppingCartData += cs_b('ts', csTireConstruction, 'S') } if (typeof (csLongitude) != 'undefined') { csGenShoppingCartData += cs_b('lg', csLongitude, 'S') } if (typeof (csLatitude) != 'undefined') { csGenShoppingCartData += cs_b('la', csLatitude, 'S') } if (typeof (csTripPurpose) != 'undefined') { csGenShoppingCartData += cs_b('tp', csTripPurpose, 'S') } if (typeof (csTripAirportCode) != 'undefined') { csGenShoppingCartData += cs_b('ac', csTripAirportCode, 'S') } if (typeof (csTripDestCity) != 'undefined') { csGenShoppingCartData += cs_b('td', csTripDestCity, 'S') } if (typeof (csTripDestState) != 'undefined') { csGenShoppingCartData += cs_b('dt', csTripDestState, 'S') } if (typeof (csScheduleStartDate) != 'undefined') { csGenShoppingCartData += cs_b('sd', csScheduleStartDate, 'S') } if (typeof (csScheduleEndDate) != 'undefined') { csGenShoppingCartData += cs_b('ed', csScheduleEndDate, 'S') } if (typeof (csAvgDailyRate) != 'undefined') { csGenShoppingCartData += cs_b('dr', csAvgDailyRate, 'S') } if (typeof (csRepeatPurchase) != 'undefined') { csGenShoppingCartData += cs_b('rp', csRepeatPurchase, 'S') } if (typeof (csGiftPurchase) != 'undefined') { csGenShoppingCartData += cs_b('gp', csGiftPurchase, 'S') } if (typeof (csOfferCode) != 'undefined') { csGenShoppingCartData += cs_b('oc', csOfferCode, 'S') } if (typeof (csOfferDescription) != 'undefined') { csGenShoppingCartData += cs_b('od', csOfferDescription, 'S') } if (typeof (csItemOfferCodes) != 'undefined') { csGenShoppingCartData += cs_b('ocs', csItemOfferCodes, 'A') } if (typeof (csItemOfferDescriptions) != 'undefined') { csGenShoppingCartData += cs_b('ods', csItemOfferDescriptions, 'A') } if (typeof (csQuantityOnHand) != 'undefined') { csGenShoppingCartData += cs_b('qh', csQuantityOnHand, 'A') } if (typeof (csMfg) != 'undefined') { csGenShoppingCartData += cs_b('mf', csMfg, 'A') } if (typeof (csBrand) != 'undefined') { csGenShoppingCartData += cs_b('br', csBrand, 'A') } if (typeof (csCategories) != 'undefined') { csGenShoppingCartData += cs_b('pcat', csCategories, 'A') } if (typeof (csSubCategories) != 'undefined') { csGenShoppingCartData += cs_b('sc', csSubCategories, 'A') } if (typeof (csExtendedPrices) != 'undefined') { csGenShoppingCartData += cs_b('er', csExtendedPrices, 'A') } if (typeof (csSearchResultType) != 'undefined') { csGenShoppingCartData += cs_b('rt', csSearchResultType, 'S') } if (typeof (csAttrib01) != 'undefined') { csGenShoppingCartData += cs_b('c1', csAttrib01, 'S') } if (typeof (csAttrib02) != 'undefined') { csGenShoppingCartData += cs_b('c2', csAttrib02, 'S') } if (typeof (csAttrib03) != 'undefined') { csGenShoppingCartData += cs_b('c3', csAttrib03, 'S') } if (typeof (csAttrib04) != 'undefined') { csGenShoppingCartData += cs_b('c4', csAttrib04, 'S') } if (typeof (csAttrib05) != 'undefined') { csGenShoppingCartData += cs_b('c5', csAttrib05, 'S') } if (typeof (csAttrib06) != 'undefined') { csGenShoppingCartData += cs_b('c6', csAttrib06, 'S') } if (typeof (csAttrib07) != 'undefined') { csGenShoppingCartData += cs_b('c7', csAttrib07, 'S') } if (typeof (csAttrib08) != 'undefined') { csGenShoppingCartData += cs_b('c8', csAttrib08, 'S') } if (typeof (csAttrib09) != 'undefined') { csGenShoppingCartData += cs_b('c9', csAttrib09, 'S') } if (typeof (csAttrib10) != 'undefined') { csGenShoppingCartData += cs_b('c10', csAttrib10, 'S') } if (typeof (csAttrib11) != 'undefined') { csGenShoppingCartData += cs_b('c11', csAttrib11, 'S') } if (typeof (csAttrib12) != 'undefined') { csGenShoppingCartData += cs_b('c12', csAttrib12, 'S') } if (typeof (csShippingDiscount) != 'undefined') { csGenShoppingCartData += cs_b('sds', csShippingDiscount, 'S') } if (typeof (csCurrencyCd) != 'undefined') { csGenShoppingCartData += cs_b('cu', csCurrencyCd, 'S') } } } catch (ex) { } }; function cs_A(cs_x) { var cs_H = ''; if (cs_x != null) { for (var cs_at = 0; cs_at < cs_x.length; cs_at++) { var cs_t = cs_x[cs_at] + ""; cs_t = cs_t.replace(/,/gi, "%C%"); cs_t = cs_t.replace(/&/gi, "%A%"); cs_t = cs_t.replace(/\?/gi, "%Q%"); cs_t = cs_t.replace(/=/gi, "%E%"); cs_H += cs_t; if (cs_at < (cs_x.length - 1)) { cs_H += ","; } } } return cs_H; }; function cs_b(cs_am, cs_I, cs_al) { cs_ag = ''; if (cs_al == "A") { cs_I = cs_A(cs_I); } if (cs_I != '') { cs_ag = '&' + cs_am + '=' + encodeURIComponent(cs_I); } return cs_ag; }; function csExecuteTracker() {
    csAccountID = 14244282;
    _csAccountID = 14244282;

    _csTrackURL = 'https://dsa.csdata1.com/data3/sample.jpeg?';
    csTrackURL = 'https://dsa.csdata1.com/data3/sample.jpeg?';

    csUseAkDownloadReceipts = true;

    csUseAkCookies = true;
    var cs_aw = 0; var cs_r = ''; var cs_aR = ''; var cs_E = ''; var cs_C = ''; var cs_J = ''; var cs_ad = ''; var cs_ac = ''; var cs_X = ''; var cs_Y = ''; var cs_P = ''; var cs_Z = ''; var cs_aY = '1330'; var cs_T = ''; var cs_R = ''; var cs_v = ''; var cs_D = ''; var cs_S = ''; var cs_bl = ''; var cs_af = ''; var cs_Q = ''; var cs_aa = ''; var cs_N = ''; var cs_U = ''; var cs_M = ''; var cs_g = ''; var cs_aF = ''; var cs_aJ = ''; var cs_aI = ''; var cs_aO = ''; var pre = ''; var cs_aK = ''; var cs_aG = ''; var cs_aM = ''; var cs_aN = ''; var cs_ay = ''; var cs_ar = ''; var cs_aZ = '0'; var co = '0'; var cs_n = false; var cs_s = false; var cs_aq = -1; var cs_l = 'https://dsa.csdata1.com/data/sample.jpeg?'; var cs_k = 0; var cs_e = 1; var cs_f = false; var cs_B = false; cs_j = ''; var cs_w = readCookie('rdrqstrng'); if (cs_w != null) { csOrigQueryString1 = cs_w; cs_u('rdrqstrng'); cs_u('rdrURL'); cs_u('rdrDate'); } if (typeof (csUseIFrameLogic) != 'undefined' && csUseIFrameLogic == true) { if (self != top) { if ((typeof (csOrigReferrer) == 'undefined') || (csOrigReferrer == '')) { csOrigReferrer = parent.document.referrer; } if ((typeof (csOrigQueryString1) == 'undefined') || (csOrigQueryString1 == '')) { csOrigQueryString1 = parent.document.location.search; } } } if ((typeof (csOrigReferrer) != 'undefined') && (csOrigReferrer != '')) { cs_ar = csOrigReferrer; } else { cs_ar = document.referrer; } if ((typeof (csOrigQueryString1) != 'undefined') && (csOrigQueryString1 != '')) { if (csOrigQueryString1.charAt(0) == '?') { cs_j = csOrigQueryString1.substring(1, csOrigQueryString1.length); } else { if (csOrigQueryString1.charAt(0) == '&') { cs_j = csOrigQueryString1.substring(1, csOrigQueryString1.length); } else { cs_j = csOrigQueryString1; } } } else { if ((typeof (csOrigQueryString2) != 'undefined') && (csOrigQueryString2 != '')) { if (csOrigQueryString2.charAt(0) == '?') { cs_j = csOrigQueryString2.substring(1, csOrigQueryString2.length); } else { if (csOrigQueryString2.charAt(0) == '&') { cs_j = csOrigQueryString2.substring(1, csOrigQueryString2.length); } else { cs_j = csOrigQueryString2; } } } } if (typeof (CS_002) != 'undefined') { cs_C = CS_002; if (typeof (CS_003) != 'undefined') { cs_D = CS_003; } if (typeof (CS_004) != 'undefined') { cs_S = CS_004; } if (typeof (CS_005) != 'undefined') { cs_E = CS_005; } if (typeof (CS_006) != 'undefined') { cs_af = CS_006; } if (typeof (CS_007) != 'undefined') { cs_ad = CS_007; } if (typeof (CS_008) != 'undefined') { cs_ac = CS_008; } if (typeof (CS_009) != 'undefined') { cs_T = CS_009; } if (typeof (CS_010) != 'undefined') { cs_Q = CS_010; } if (typeof (CS_011) != 'undefined') { cs_R = CS_011; } if (typeof (CS_012) != 'undefined') { cs_aa = CS_012; } if (typeof (CS_013) != 'undefined') { cs_N = CS_013; } if (typeof (CS_014) != 'undefined') { cs_U = CS_014; } if (typeof (CS_015) != 'undefined') { cs_M = CS_015; } } else { cs_C = cs_d('002'); if (cs_C == '') { cs_C = cs_d('CS_002'); } cs_J = cs_d('manufacturerid'); cs_D = cs_d('003'); if (cs_D == '') { cs_D = cs_d('CS_003'); } cs_S = cs_d('004'); if (cs_S == '') { cs_S = cs_d('CS_004'); } cs_E = cs_d('005'); if (cs_E == '') { cs_E = cs_d('CS_005'); } cs_af = cs_d('006'); if (cs_af == '') { cs_af = cs_d('CS_006'); } cs_ad = cs_d('007'); if (cs_ad == '') { cs_ad = cs_d('CS_007'); } cs_ac = cs_d('008'); if (cs_ac == '') { cs_ac = cs_d('CS_008'); } cs_T = cs_d('009'); if (cs_T == '') { cs_T = cs_d('CS_009'); } cs_Q = cs_d('010'); if (cs_Q == '') { cs_Q = cs_d('CS_010'); } cs_R = cs_d('011'); if (cs_R == '') { cs_R = cs_d('CS_011'); } cs_aa = cs_d('012'); if (cs_aa == '') { cs_aa = cs_d('CS_012'); } cs_N = cs_d('013'); if (cs_N == '') { cs_N = cs_d('CS_013'); } cs_U = cs_d('014'); if (cs_U == '') { cs_U = cs_d('CS_014'); } cs_M = cs_d('015'); if (cs_M == '') { cs_M = cs_d('CS_015'); } } if (cs_M != '') { var cs_aH = readCookie('ClrSCD'); if (cs_aH != null) { var cs_K = parseInt(cs_aH); var cs_G = parseInt(cs_M) * 60 * 60 * 1000; var cs_ax = (new Date()).getTime(); var cs_y = cs_ax - cs_K; if (cs_y >= cs_G) { cs_u('ClrSSID'); } } } if (typeof (csUrlOverride) != 'undefined' && csUrlOverride != '') { cs_ay = csUrlOverride; } else { if (typeof (csLookForDcsUri) != 'undefined' && csLookForDcsUri == true) { cs_ay = cs_W("DCS.dcsuri"); } } if (typeof (csHitTrackingOff) != 'undefined' && csHitTrackingOff != '') { cs_f = csHitTrackingOff; } var cs_aB = readCookie('ClrCSTO'); if (cs_aB == null || cs_aB == '') { cs_h('ClrCSTO', escape('T'), .0035); cs_f = false; cs_e = 2; } if (typeof (csDisplayAltTag) != 'undefined' && csDisplayAltTag != '') { cs_B = csDisplayAltTag; } if (typeof (csAlternateSessionId) != 'undefined' && csAlternateSessionId != '') { cs_aF = csAlternateSessionId; } if (typeof (csSiteSearchTerm) != 'undefined' && csSiteSearchTerm != '') { cs_aJ = csSiteSearchTerm; cs_f = false; cs_e = 2; } if (typeof (csSiteSearchResultCount) != 'undefined' && csSiteSearchResultCount != '') { cs_aI = csSiteSearchResultCount; cs_f = false; cs_e = 2; } if (typeof (csAjaxTracking) == 'undefined' || csAjaxTracking == '') { csAjaxTracking = false; } if (typeof (csUniqueVisitorID) != 'undefined' && csUniqueVisitorID != '') { cs_r = csUniqueVisitorID; cs_k = 1; cs_e = 1; } else { cs_r = readCookie('ClrSSID'); if (cs_r == null || cs_r == '') { cs_r = cs_o(); cs_g = (new Date()).getTime(); cs_e = 0; cs_f = false; } else { if (cs_E != '' && cs_v == '') { cs_X = readCookie('ClrKYID'); cs_X += ''; if (cs_E != cs_X) { cs_v = cs_r; cs_r = cs_o(); cs_g = (new Date()).getTime(); cs_f = false; cs_e = 2; } } if (cs_C != '' && cs_v == '') { cs_Y = readCookie('ClrLSID'); cs_Y += ''; if (cs_C != cs_Y) { cs_v = cs_r; cs_r = cs_o(); cs_g = (new Date()).getTime(); cs_f = false; cs_e = 2; } } if (cs_J != '' && cs_v == '') { cs_P = readCookie('ClrMFGID'); cs_P += ''; if (cs_J != cs_P) { cs_v = cs_r; cs_r = cs_o(); dt = new Date(); cs_g = (new Date()).getTime(); cs_f = false; cs_e = 2; } } if (cs_D != '' && cs_v == '') { cs_Z = readCookie('ClrCPID'); cs_Z += ''; if (cs_D != cs_Z) { cs_v = cs_r; cs_r = cs_o(); cs_g = (new Date()).getTime(); cs_f = false; cs_e = 2; } } cs_k = 0; } } cs_h('ClrSSID', escape(cs_r), 180); if (cs_v != '') { cs_h('ClrPSSID', escape(cs_v), 180); } else { cs_v = readCookie('ClrPSSID'); } var cs_as = readCookie('ClrOSSID'); if (cs_as == null || cs_as == '') { cs_h('ClrOSSID', escape(cs_r), 180); } if (cs_E != '') { cs_h('ClrKYID', escape(cs_E), 180); } if (cs_C != '') { cs_h('ClrLSID', escape(cs_C), 180); } if (cs_J != '') { cs_h('ClrMFGID', escape(cs_J), 180); } if (cs_D != '') { cs_h('ClrCPID', escape(cs_D), 180); } if (cs_g != '') { cs_h('ClrSCD', escape(cs_g), 180); } if (typeof (csAccountID) != 'undefined') { cs_aw = csAccountID; } else { cs_aw = 1; } if (typeof (csGenShoppingCartData) != 'undefined') { cs_n = true; } if (typeof (csYhoShoppingCartData) != 'undefined') { cs_s = true; } if (typeof (csTrackURL) != 'undefined') { cs_l = csTrackURL; } if (typeof (csCustomCategory) != 'undefined') { cs_N = csCustomCategory; } if (typeof (csPageConfiguration) != 'undefined') { cs_U = csPageConfiguration; } if (typeof (csLoanAmount) != 'undefined') { cs_aO = csLoanAmount; } if (typeof (csPremiumAmount) != 'undefined') { pre = csPremiumAmount; } if (typeof (csTerm) != 'undefined') { cs_aK = csTerm; } if (typeof (csCustomerRating) != 'undefined') { cs_aG = csCustomerRating; } if (typeof (csGender) != 'undefined') { cs_aM = csGender; } if (typeof (csBirthDay) != 'undefined') { cs_aN = csBirthDay; } if (cs_e == 0) { if (typeof (csUseAkDownloadReceipts) != 'undefined') { if (csUseAkDownloadReceipts) { cs_aZ = '1'; } } if (typeof (csUseAkCookies) != 'undefined') { if (csUseAkCookies) { co = '1'; } } } cs_l += 'CS_001=' + cs_aw + cs_a('re', cs_aZ) + cs_a('co', co) + cs_a('ssid', cs_r) + cs_a('cs', cs_k) + cs_a('psid', cs_v) + cs_a('002', cs_C) + cs_a('003', cs_D) + cs_a('004', cs_S) + cs_a('005', cs_E) + cs_a('006', cs_af) + cs_a('007', cs_ad) + cs_a('008', cs_ac) + cs_a('009', cs_T) + cs_a('010', cs_Q) + cs_a('011', cs_R) + cs_a('012', cs_aa) + cs_a('013', cs_N) + cs_a('014', cs_U) + cs_a('mid', cs_J) + cs_a('ci', cs_e) + cs_a('ver', cs_aY) + cs_a('rurl', cs_ar) + cs_a('as', cs_aF) + cs_a('sst', cs_aJ) + cs_a('ssr', cs_aI) + cs_a('lam', cs_aO) + cs_a('pre', pre) + cs_a('ter', cs_aK) + cs_a('rat', cs_aG) + cs_a('gen', cs_aM) + cs_a('bir', cs_aN) + cs_a('uov', cs_ay) + cs_a('oqs', cs_j); if (cs_n) { cs_f = false; cs_l += csGenShoppingCartData; cs_l += '&actionId=1'; cs_aq = 1; } if (cs_s) { cs_f = false; cs_l += csYhoShoppingCartData; cs_l += '&actionId=1'; cs_aq = 2; } cs_l += '&tran=' + cs_aq; if (cs_l.cs_aX > 2000) { cs_l = cs_l.substring(0, 2000) + '&TR=1'; } var cs_ae = ''; if (cs_B) { cs_ae = " alt=''"; } if (!cs_f) { if (csAjaxTracking) { var cs_aj = new Image(); cs_aj.src = cs_l; } else { document.write('<img src=' + cs_l + cs_ae + " style='DISPLAY:	none' height=0/>"); } } 
}; function cs_h(name, value, cs_aE) { var cs_L = ''; if (typeof (csCookieDomain) != 'undefined') { cs_L = ';domain=' + csCookieDomain; } if (cs_aE) { var cs_an = new Date(); cs_an.setTime(cs_an.getTime() + (cs_aE * 24 * 60 * 60 * 1000)); var expires = '; expires=' + cs_an.toGMTString(); } else var expires = ''; document.cookie = name + '=' + value + expires + cs_L + '; path=/'; }; function readCookie(name) { var cs_ah = name + '='; var ca = document.cookie.split(';'); for (var cs_aA = 0; cs_aA < ca.length; cs_aA++) { var c = ca[cs_aA]; while (c.charAt(0) == ' ') c = c.substring(1, c.length); if (c.indexOf(cs_ah) == 0) return c.substring(cs_ah.length, c.length); } return null; }; function cs_u(name) { cs_h(name, '', -1); }; function cs_o() { var cs_aD = ''; var cs_bh = new Date(); var cs_au = cs_bh.getTime().toString(); var cs_ap = ''; var cs_aW = ''; cs_ap = document.referrer + document.location + document.title; var cs_ab = 0; for (var cs_az = 0; cs_az < cs_ap.length; cs_az++) { cs_ab += cs_ap.charCodeAt(cs_az); } cs_aD = cs_au + '-' + cs_ab.toString(); return cs_aD; }; function cs_d(cs_z) { var cs_m = ''; var cs_ai; if (cs_j != '') { cs_m = cs_F(cs_j, cs_z); } else { cs_ai = location.search.substring(1, location.search.length); if (cs_ai.length > 0) { cs_m = cs_F(cs_ai, cs_z); } else { var cs_ao = 0; cs_ao = location.href.indexOf('&'); if (cs_ao >= 0) { cs_m = cs_F(location.href.substring(cs_ao + 1), cs_z); } } } return cs_m; }; function cs_F(cs_ai, cs_z) { var cs_m = ''; cs_ai = cs_ai.replace(/\+/g, ' '); var cs_aC = cs_ai.split('&'); for (var cs_av = 0; cs_av < cs_aC.length; cs_av++) { var cs_aL; var cs_V; var cs_ak = cs_aC[cs_av].split('='); if (cs_ak.length == 2) { cs_V = unescape(cs_ak[0]); if (cs_V.toUpperCase() == cs_z.toUpperCase()) { cs_m = unescape(cs_ak[1]); break; } } } return cs_m; }; function cs_a(cs_aT, cs_O) { if (cs_O == null || cs_O == '') { return ''; } else { return '&' + cs_aT + '=' + encodeURIComponent(cs_O); } }; function cs_W(tagName) { var m = document.getElementsByTagName('meta'); for (var i in m) { if (m[i].name == tagName) { return m[i].content; } } return ''; }
/* End CLEARSALEING */