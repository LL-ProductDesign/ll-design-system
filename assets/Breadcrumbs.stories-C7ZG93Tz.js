import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-C7v2YsCr.js";import"./preload-helper-PPVm8Dsz.js";function f(){return e.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,style:{flexShrink:0,display:"block"},children:e.jsx("path",{d:"M11.2159 7.28414C11.4554 7.55035 11.4554 7.94965 11.2159 8.18924L6.10475 13.3003C5.83854 13.5666 5.43924 13.5666 5.19965 13.3003C4.93345 13.0608 4.93345 12.6615 5.19965 12.4219L9.85822 7.76331L5.19965 3.07813C4.93345 2.83854 4.93345 2.43924 5.19965 2.19965C5.43924 1.93345 5.83854 1.93345 6.07813 2.19965L11.2159 7.28414Z",fill:"var(--text-disabled)"})})}const b={fontFamily:"var(--font-family-base)",fontSize:14,fontWeight:400,lineHeight:"18px",whiteSpace:"nowrap",textDecoration:"none",padding:0,border:"none",background:"none",cursor:"pointer",outline:"none"},S={...b,color:"var(--text-brand)"},y={...b,color:"var(--text-primary)",cursor:"default",pointerEvents:"none"},x={outline:"var(--border-focus)",outlineOffset:2,boxShadow:"var(--shadow-focus)",borderRadius:2};function m({items:n,ariaLabel:l="Breadcrumb"}){return e.jsx("nav",{"aria-label":l,children:e.jsx("ol",{style:{display:"flex",alignItems:"center",gap:4,listStyle:"none",margin:0,padding:0},children:n.map((t,u)=>{const g=u===n.length-1;return e.jsxs(h.Fragment,{children:[e.jsx("li",{style:{display:"flex",alignItems:"center"},children:g?e.jsx("span",{"aria-current":"page",style:y,children:t.label}):e.jsx("a",{href:t.href??"#",onClick:t.onClick,style:S,onFocus:r=>Object.assign(r.currentTarget.style,x),onBlur:r=>{r.currentTarget.style.outline="",r.currentTarget.style.outlineOffset="",r.currentTarget.style.boxShadow="",r.currentTarget.style.borderRadius=""},children:t.label})}),!g&&e.jsx("li",{"aria-hidden":!0,style:{display:"flex",alignItems:"center"},children:e.jsx(f,{})})]},u)})})})}m.__docgenInfo={description:"Learnlight Design System — Breadcrumbs",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Ordered list of breadcrumb steps. The last item is treated as the current page."},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the nav landmark.",defaultValue:{value:"'Breadcrumb'",computed:!1}}}};const B={title:"Components/Breadcrumbs",component:m,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{items:{control:!1},ariaLabel:{control:"text"}}},a={args:{items:[{label:"B2 - Upper-Intermediate 1",href:"#"},{label:"Unit 1 - Getting ahead of the competition",href:"#"},{label:"Markets and competition"}]}},i={name:"Steps / Two",args:{items:[{label:"Home",href:"#"},{label:"Current page"}]}},c={name:"Steps / Three",args:{items:[{label:"Home",href:"#"},{label:"Section",href:"#"},{label:"Current page"}]}},p={name:"Steps / Four",args:{items:[{label:"B2 - Upper-Intermediate 1",href:"#"},{label:"Unit 1",href:"#"},{label:"Getting ahead",href:"#"},{label:"Markets and competition"}]}},s={name:"State / Single step",args:{items:[{label:"Markets and competition"}]}},o={name:"State / Focus (tab to see)",args:{items:[{label:"B2 - Upper-Intermediate 1",href:"#"},{label:"Unit 1 - Getting ahead of the competition",href:"#"},{label:"Markets and competition"}]}},d={name:"Interactive / Click handlers",render:()=>{const[n,l]=h.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(m,{items:[{label:"B2 - Upper-Intermediate 1",onClick:t=>{t.preventDefault(),l("Clicked: B2")}},{label:"Unit 1",onClick:t=>{t.preventDefault(),l("Clicked: Unit 1")}},{label:"Markets and competition"}]}),n&&e.jsx("span",{style:{fontFamily:"monospace",fontSize:12,color:"var(--text-secondary)"},children:n})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        color: 'var(--text-secondary)'
      }}>
            {log}
          </span>}
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const U=["Default","TwoSteps","ThreeSteps","FourSteps","SingleStep","FocusState","WithClickHandlers"];export{a as Default,o as FocusState,p as FourSteps,s as SingleStep,c as ThreeSteps,i as TwoSteps,d as WithClickHandlers,U as __namedExportsOrder,B as default};
