(this.webpackJsonptictactoe_hooks=this.webpackJsonptictactoe_hooks||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t(4),i=t.n(s),a=t(2),r=t(0),l=function(e){return Object(r.jsx)("button",{className:e.class,onClick:e.onClick,children:e.value})},u=function(e){var n=function(n){return e.winningline&&e.winningline.line.includes(n)?"highlight ":""},t=function(t){return Object(r.jsx)(l,{value:e.squares[t],onClick:function(){return e.onClick(t)},line:e.winningline,class:n(t)+"square "+(e.status.includes("DRAW")?"draw ":"")},t)};return Object(r.jsx)("div",{className:"game-board",children:function(e){for(var n=[],c=0;c<e;c++)n.push(t(c));return n}(9)})};t(10);function o(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var c=Object(a.a)(n[t],3),s=c[0],i=c[1],r=c[2];if(e[s]&&e[s]===e[i]&&e[s]===e[r])return{winner:e[s],line:n[t]}}return null}var j=function(){var e,n=Object(c.useState)(!0),t=Object(a.a)(n,2),s=t[0],i=t[1],l=Object(c.useState)([{squares:Array(9).fill(null),index:0}]),j=Object(a.a)(l,2),d=j[0],b=j[1],h=Object(c.useState)(0),O=Object(a.a)(h,2),x=O[0],f=O[1],g=Object(c.useState)(!1),v=Object(a.a)(g,2),m=v[0],p=v[1],k=d.slice(0,x+1),N=d[x],w=o(N.squares),q=[[1,1],[2,1],[3,1],[1,2],[2,2],[3,2],[1,3],[2,3],[3,3]];e=w?"Winner: "+w.winner:N.squares.includes(null)?"Next player: "+(s?"X":"O"):"DRAW: No Winner :(";var C,y=d.map((function(e,n){var t=e.index,c=q[t][0],s=q[t][1],i=n?"Go to move #".concat(n," (").concat(c,", ").concat(s,")"):"Go to game start";return Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:function(){return A(n)},className:n===x?"selected-move":"not-selected",children:i})},n)})),A=function(e){f(e),i(e%2===0)};return Object(r.jsxs)("div",{className:"game",children:[Object(r.jsx)("h1",{children:"Tic Tac Toe"}),Object(r.jsxs)("div",{className:"game-details",children:[Object(r.jsx)(u,{squares:N.squares,onClick:function(e){return function(e){var n=N.squares.slice();o(n)||n[e]||(n[e]=s?"X":"O",i(!s),f(k.length),b(k.concat([{squares:n,index:e}])))}(e)},winningline:w,status:e}),Object(r.jsxs)("div",{className:"game-info",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:e})}),Object(r.jsxs)("div",{className:"toggle",children:[Object(r.jsxs)("label",{className:"switch",children:[Object(r.jsx)("input",{type:"checkbox",onChange:function(){p(!m)}}),Object(r.jsx)("span",{className:"slider"})]}),Object(r.jsx)("p",{children:"Toggle Ascending | Descending"})]}),Object(r.jsx)("ol",{children:(C=y,m&&C.reverse(),C)})]})]})]})};i.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b7f70c2d.chunk.js.map