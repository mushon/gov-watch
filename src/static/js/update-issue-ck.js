// Generated by IcedCoffeeScript 1.2.0i
(function(){var a,b,c,d=[].slice;a={Deferrals:function(){function a(a){this.continuation=a;this.count=1;this.ret=null}a.prototype._fulfill=function(){if(!--this.count)return this.continuation(this.ret)};a.prototype.defer=function(a){var b=this;++this.count;return function(){var c,e;c=1<=arguments.length?d.call(arguments,0):[];a!=null&&(e=a.assign_fn)!=null&&e.apply(null,c);return b._fulfill()}};return a}(),findDeferral:function(){return null}};c=function(){};b={type:"obj",children:[{name:"description",props:{type:"text",optional:!0,title:"דברי הסבר"}},{name:"implementation_status",props:{type:"select",options:[["NEW","טרם התחיל"],["STUCK","תקוע"],["IN_PROGRESS","בתהליך"],["FIXED","יושם במלואו"],["WORKAROUND","יושם חלקית"],["IRRELEVANT","יישום ההמלצה כבר לא נדרש"]],title:"סטטוס יישום"}},{name:"implementation_status_text",props:{type:"text",optional:!0,title:"הסבר לסטטוס היישום"}},{name:"links",props:{type:"arr",eltype:{type:"obj",children:[{name:"url",props:{type:"str",title:"URL"}},{name:"description",props:{type:"str",title:"תיאור"}}]},title:"קישורים"}}]};$(function(){var c;$("#savedialog").modal();$("#savedialog").modal("hide");$("#updaters").modal();$("#updaters").modal("hide");c=new JSE($("#body"),b);$("#submit").click(function(){var a;a=c.getvalue();try{c.setvalue(a);$("#errors").html("&nbsp;");$("#saver input[name='data']").val(JSON.stringify(a));$("#saver").submit()}catch(b){$("#errors").html(b)}$("#body").html("");c.render();return $("#savedialog").modal("hide")});window.onhashchange=function(b){var d,e,f,g,h,i,j=this;h=a.findDeferral(arguments);e=window.location.hash;e=e.slice(1,e.length+1||9e9);$("#saver").attr("action","/update/"+e);(function(b){i=new a.Deferrals(b,{parent:h,filename:"update-issue.iced",funcname:"onhashchange"});$.getJSON("/api/"+e,i.defer({assign_fn:function(){return function(){return d=arguments[0]}}(),lineno:25}));i._fulfill()})(function(){var a,b;g=d.updates;g=Object.keys(g);$("#updaters ul").html("<li>ארגון חדש</li>");for(a=0,b=g.length;a<b;a++){f=g[a];$("#updaters ul").append("<li>"+f+"</li>")}$("#updaters li").click(function(){var a;$("#updaters").modal("hide");a=$(this).html();c.setvalue(d.updates[a][0]);$("#body").html("");return c.render()});return $("#updaters").modal("show")})};return window.onhashchange()})}).call(this);