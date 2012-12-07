Ext.data.JsonP.Kort_view_profile_BadgesContainer({"tagname":"class","name":"Kort.view.profile.BadgesContainer","extends":"Ext.Container","mixins":[],"alternateClassNames":[],"aliases":{"widget":["badgescontainer"]},"singleton":false,"requires":["Ext.Button","Ext.TitleBar","Kort.view.profile.BadgesCarousel"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Kort.view.profile.BadgesContainer","code_type":"ext_define","members":{"cfg":[{"name":"hideAnimation","tagname":"cfg","owner":"Kort.view.profile.BadgesContainer","meta":{"private":true},"id":"cfg-hideAnimation"},{"name":"items","tagname":"cfg","owner":"Kort.view.profile.BadgesContainer","meta":{"private":true},"id":"cfg-items"},{"name":"layout","tagname":"cfg","owner":"Kort.view.profile.BadgesContainer","meta":{"private":true},"id":"cfg-layout"},{"name":"selectedBadgeIndex","tagname":"cfg","owner":"Kort.view.profile.BadgesContainer","meta":{"private":true},"id":"cfg-selectedBadgeIndex"},{"name":"showAnimation","tagname":"cfg","owner":"Kort.view.profile.BadgesContainer","meta":{"private":true},"id":"cfg-showAnimation"},{"name":"zIndex","tagname":"cfg","owner":"Kort.view.profile.BadgesContainer","meta":{"private":true},"id":"cfg-zIndex"}],"property":[],"method":[{"name":"getHideAnimation","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-getHideAnimation"},{"name":"getItems","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-getItems"},{"name":"getLayout","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-getLayout"},{"name":"getSelectedBadgeIndex","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-getSelectedBadgeIndex"},{"name":"getShowAnimation","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-getShowAnimation"},{"name":"getZIndex","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-getZIndex"},{"name":"initialize","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{"private":true},"id":"method-initialize"},{"name":"setHideAnimation","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-setHideAnimation"},{"name":"setItems","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-setItems"},{"name":"setLayout","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-setLayout"},{"name":"setSelectedBadgeIndex","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-setSelectedBadgeIndex"},{"name":"setShowAnimation","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-setShowAnimation"},{"name":"setZIndex","tagname":"method","owner":"Kort.view.profile.BadgesContainer","meta":{},"id":"method-setZIndex"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"BadgesContainer.js","href":"BadgesContainer.html#Kort-view-profile-BadgesContainer"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Container"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Container<div class='subclass '><strong>Kort.view.profile.BadgesContainer</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.Button</div><div class='dependency'>Ext.TitleBar</div><div class='dependency'><a href='#!/api/Kort.view.profile.BadgesCarousel' rel='Kort.view.profile.BadgesCarousel' class='docClass'>Kort.view.profile.BadgesCarousel</a></div><h4>Files</h4><div class='dependency'><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer' target='_blank'>BadgesContainer.js</a></div></pre><div class='doc-contents'><p>Badges container which overlays profile when a badge gets tapped</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-hideAnimation' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-hideAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-cfg-hideAnimation' class='name expandable'>hideAnimation</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: 'slideOut', direction: 'down'}</code></p></div></div></div><div id='cfg-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-cfg-items' class='name not-expandable'>items</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-cfg-layout' class='name expandable'>layout</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'vbox'</code></p></div></div></div><div id='cfg-selectedBadgeIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-selectedBadgeIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-cfg-selectedBadgeIndex' class='name expandable'>selectedBadgeIndex</a><span> : Number</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-showAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-showAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-cfg-showAnimation' class='name expandable'>showAnimation</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: 'slideIn', direction: 'up'}</code></p></div></div></div><div id='cfg-zIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-cfg-zIndex' class='name not-expandable'>zIndex</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getHideAnimation' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-hideAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-getHideAnimation' class='name expandable'>getHideAnimation</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of hideAnimation. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-hideAnimation\" rel=\"Kort.view.profile.BadgesContainer-cfg-hideAnimation\" class=\"docClass\">hideAnimation</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-getItems' class='name expandable'>getItems</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of items. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-items\" rel=\"Kort.view.profile.BadgesContainer-cfg-items\" class=\"docClass\">items</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-getLayout' class='name expandable'>getLayout</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of layout. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-layout\" rel=\"Kort.view.profile.BadgesContainer-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSelectedBadgeIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-selectedBadgeIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-getSelectedBadgeIndex' class='name expandable'>getSelectedBadgeIndex</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Returns the value of selectedBadgeIndex. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-selectedBadgeIndex\" rel=\"Kort.view.profile.BadgesContainer-cfg-selectedBadgeIndex\" class=\"docClass\">selectedBadgeIndex</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getShowAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-showAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-getShowAnimation' class='name expandable'>getShowAnimation</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of showAnimation. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-showAnimation\" rel=\"Kort.view.profile.BadgesContainer-cfg-showAnimation\" class=\"docClass\">showAnimation</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getZIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-getZIndex' class='name expandable'>getZIndex</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of zIndex. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-zIndex\" rel=\"Kort.view.profile.BadgesContainer-cfg-zIndex\" class=\"docClass\">zIndex</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setHideAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-hideAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-setHideAnimation' class='name expandable'>setHideAnimation</a>( <span class='pre'>hideAnimation</span> )</div><div class='description'><div class='short'>Sets the value of hideAnimation. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-hideAnimation\" rel=\"Kort.view.profile.BadgesContainer-cfg-hideAnimation\" class=\"docClass\">hideAnimation</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hideAnimation</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-setItems' class='name expandable'>setItems</a>( <span class='pre'>items</span> )</div><div class='description'><div class='short'>Sets the value of items. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-items\" rel=\"Kort.view.profile.BadgesContainer-cfg-items\" class=\"docClass\">items</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-setLayout' class='name expandable'>setLayout</a>( <span class='pre'>layout</span> )</div><div class='description'><div class='short'>Sets the value of layout. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-layout\" rel=\"Kort.view.profile.BadgesContainer-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layout</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSelectedBadgeIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-selectedBadgeIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-setSelectedBadgeIndex' class='name expandable'>setSelectedBadgeIndex</a>( <span class='pre'>selectedBadgeIndex</span> )</div><div class='description'><div class='short'>Sets the value of selectedBadgeIndex. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-selectedBadgeIndex\" rel=\"Kort.view.profile.BadgesContainer-cfg-selectedBadgeIndex\" class=\"docClass\">selectedBadgeIndex</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selectedBadgeIndex</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setShowAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-showAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-setShowAnimation' class='name expandable'>setShowAnimation</a>( <span class='pre'>showAnimation</span> )</div><div class='description'><div class='short'>Sets the value of showAnimation. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-showAnimation\" rel=\"Kort.view.profile.BadgesContainer-cfg-showAnimation\" class=\"docClass\">showAnimation</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>showAnimation</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setZIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.profile.BadgesContainer'>Kort.view.profile.BadgesContainer</span><br/><a href='source/BadgesContainer.html#Kort-view-profile-BadgesContainer-cfg-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.profile.BadgesContainer-method-setZIndex' class='name expandable'>setZIndex</a>( <span class='pre'>zIndex</span> )</div><div class='description'><div class='short'>Sets the value of zIndex. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.profile.BadgesContainer-cfg-zIndex\" rel=\"Kort.view.profile.BadgesContainer-cfg-zIndex\" class=\"docClass\">zIndex</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>zIndex</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});