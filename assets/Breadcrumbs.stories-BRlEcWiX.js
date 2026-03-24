import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-2IrQ87nu.js";import{c as m,e as S,f as y}from"./tokens-D4cFRLhh.js";import"./preload-helper-PPVm8Dsz.js";function x(){return e.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,style:{flexShrink:0,display:"block"},children:e.jsx("path",{d:"M11.2159 7.28414C11.4554 7.55035 11.4554 7.94965 11.2159 8.18924L6.10475 13.3003C5.83854 13.5666 5.43924 13.5666 5.19965 13.3003C4.93345 13.0608 4.93345 12.6615 5.19965 12.4219L9.85822 7.76331L5.19965 3.07813C4.93345 2.83854 4.93345 2.43924 5.19965 2.19965C5.43924 1.93345 5.83854 1.93345 6.07813 2.19965L11.2159 7.28414Z",fill:m["text-disabled"]})})}const f={fontFamily:"'Fira Sans', sans-serif",fontSize:14,fontWeight:400,lineHeight:"18px",whiteSpace:"nowrap",textDecoration:"none",padding:0,border:"none",background:"none",cursor:"pointer",outline:"none"},k={...f,color:m["text-brand"]},C={...f,color:m["text-primary"],cursor:"default",pointerEvents:"none"},B={outline:y.focus,outlineOffset:2,boxShadow:S.focus,borderRadius:2};function u({items:r,ariaLabel:l="Breadcrumb"}){return e.jsx("nav",{"aria-label":l,children:e.jsx("ol",{style:{display:"flex",alignItems:"center",gap:4,listStyle:"none",margin:0,padding:0},children:r.map((t,g)=>{const h=g===r.length-1;return e.jsxs(b.Fragment,{children:[e.jsx("li",{style:{display:"flex",alignItems:"center"},children:h?e.jsx("span",{"aria-current":"page",style:C,children:t.label}):e.jsx("a",{href:t.href??"#",onClick:t.onClick,style:k,onFocus:n=>Object.assign(n.currentTarget.style,B),onBlur:n=>{n.currentTarget.style.outline="",n.currentTarget.style.outlineOffset="",n.currentTarget.style.boxShadow="",n.currentTarget.style.borderRadius=""},children:t.label})}),!h&&e.jsx("li",{"aria-hidden":!0,style:{display:"flex",alignItems:"center"},children:e.jsx(x,{})})]},g)})})})}u.__docgenInfo={description:"Learnlight Design System — Breadcrumbs",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Ordered list of breadcrumb steps. The last item is treated as the current page."},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the nav landmark.",defaultValue:{value:"'Breadcrumb'",computed:!1}}}};const w={title:"Components/Breadcrumbs",component:u,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{items:{control:!1},ariaLabel:{control:"text"}}},a={args:{items:[{label:"B2 - Upper-Intermediate 1",href:"#"},{label:"Unit 1 - Getting ahead of the competition",href:"#"},{label:"Markets and competition"}]}},i={name:"Steps / Two",args:{items:[{label:"Home",href:"#"},{label:"Current page"}]}},c={name:"Steps / Three",args:{items:[{label:"Home",href:"#"},{label:"Section",href:"#"},{label:"Current page"}]}},p={name:"Steps / Four",args:{items:[{label:"B2 - Upper-Intermediate 1",href:"#"},{label:"Unit 1",href:"#"},{label:"Getting ahead",href:"#"},{label:"Markets and competition"}]}},s={name:"State / Single step",args:{items:[{label:"Markets and competition"}]}},o={name:"State / Focus (tab to see)",args:{items:[{label:"B2 - Upper-Intermediate 1",href:"#"},{label:"Unit 1 - Getting ahead of the competition",href:"#"},{label:"Markets and competition"}]}},d={name:"Interactive / Click handlers",render:()=>{const[r,l]=b.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(u,{items:[{label:"B2 - Upper-Intermediate 1",onClick:t=>{t.preventDefault(),l("Clicked: B2")}},{label:"Unit 1",onClick:t=>{t.preventDefault(),l("Clicked: Unit 1")}},{label:"Markets and competition"}]}),r&&e.jsx("span",{style:{fontFamily:"monospace",fontSize:12,color:"#5d7682"},children:r})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'B2 - Upper-Intermediate 1',
      href: '#'
    }, {
      label: 'Unit 1 - Getting ahead of the competition',
      href: '#'
    }, {
      label: 'Markets and competition'
    }]
  }
}`,...a.parameters?.docs?.source},description:{story:'Matches the Figma "Breadcrumbs" spec: 3-level hierarchy',...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Steps / Two',
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Current page'
    }]
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Steps / Three',
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Section',
      href: '#'
    }, {
      label: 'Current page'
    }]
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Steps / Four',
  args: {
    items: [{
      label: 'B2 - Upper-Intermediate 1',
      href: '#'
    }, {
      label: 'Unit 1',
      href: '#'
    }, {
      label: 'Getting ahead',
      href: '#'
    }, {
      label: 'Markets and competition'
    }]
  }
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'State / Single step',
  args: {
    items: [{
      label: 'Markets and competition'
    }]
  }
}`,...s.parameters?.docs?.source},description:{story:"Single step — no separators, acts as current page indicator",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'State / Focus (tab to see)',
  args: {
    items: [{
      label: 'B2 - Upper-Intermediate 1',
      href: '#'
    }, {
      label: 'Unit 1 - Getting ahead of the competition',
      href: '#'
    }, {
      label: 'Markets and competition'
    }]
  }
}`,...o.parameters?.docs?.source},description:{story:"Demonstrate keyboard-focus styling by tabbing to a link",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Interactive / Click handlers',
  render: () => {
    const [log, setLog] = React.useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Breadcrumbs items={[{
        label: 'B2 - Upper-Intermediate 1',
        onClick: e => {
          e.preventDefault();
          setLog('Clicked: B2');
        }
      }, {
        label: 'Unit 1',
        onClick: e => {
          e.preventDefault();
          setLog('Clicked: Unit 1');
        }
      }, {
        label: 'Markets and competition'
      }]} />
        {log && <span style={{
        fontFamily: 'monospace',
        fontSize: 12,
        color: '#5d7682'
      }}>
            {log}
          </span>}
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const I=["Default","TwoSteps","ThreeSteps","FourSteps","SingleStep","FocusState","WithClickHandlers"];export{a as Default,o as FocusState,p as FourSteps,s as SingleStep,c as ThreeSteps,i as TwoSteps,d as WithClickHandlers,I as __namedExportsOrder,w as default};
