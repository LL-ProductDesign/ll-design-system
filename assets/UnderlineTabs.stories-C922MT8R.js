import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-R0gxy-mM.js";import{c as r,i as D}from"./tokens-Ewy7nuVW.js";import"./preload-helper-PPVm8Dsz.js";function P({value:n}){return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,borderRadius:999,background:r["bg-brand"],fontFamily:"'Fira Sans', sans-serif",fontSize:9,fontWeight:600,color:r["text-invert"],lineHeight:1},children:n})}function A({item:n,active:t,stretched:l,onClick:o}){const[a,v]=S.useState(!1),d=!!n.disabled,w=a&&!d,g=t||a&&t?r["text-brand"]:d?r["text-disabled"]:r["text-secondary"],T=d?D.neutral[30]:t?r["bg-brand"]:r["border-primary"],x=!!n.icon,I=x&&(n.iconPosition??"left")==="left",C=x&&n.iconPosition==="right";return e.jsxs("button",{role:"tab","aria-selected":t,disabled:d,onClick:o,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,flex:l?"1 0 0":void 0,background:"none",border:"none",padding:0,cursor:d?"not-allowed":"pointer",minWidth:0},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:x||n.counter!=null?4:0,padding:"4px 16px",borderRadius:4,background:w?r["bg-secondary"]:"transparent",transition:"background 0.12s"},children:[I&&e.jsx("span",{style:{display:"inline-flex",width:20,height:20,color:g,flexShrink:0},children:n.icon}),e.jsx("span",{style:{fontFamily:"'Fira Sans', sans-serif",fontSize:14,fontWeight:600,color:g,lineHeight:"18px",whiteSpace:"nowrap",transition:"color 0.12s"},children:n.label}),n.counter!=null&&e.jsx(P,{value:n.counter}),C&&e.jsx("span",{style:{display:"inline-flex",width:20,height:20,color:g,flexShrink:0},children:n.icon})]}),e.jsx("div",{style:{height:2,width:"100%",borderRadius:1,background:T,transition:"background 0.12s",flexShrink:0}})]})}function y({tabs:n,activeId:t,onChange:l,stretched:o=!1}){return e.jsx("div",{role:"tablist",style:{display:"flex",alignItems:"stretch",height:29,overflow:"hidden",width:o?"100%":void 0},children:n.map(a=>e.jsx(A,{item:a,active:a.id===t,stretched:o,onClick:()=>!a.disabled&&l(a.id)},a.id))})}y.__docgenInfo={description:`Learnlight Design System — Underline Tabs

Tabs allow users to navigate between related views of content
while remaining in the context of the page.`,methods:[],displayName:"UnderlineTabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Tab definitions"},activeId:{required:!0,tsType:{name:"string"},description:"ID of the currently active tab"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called with the tab ID when a tab is clicked"},stretched:{required:!1,tsType:{name:"boolean"},description:`When true, tabs share the available width equally (flex-stretch).
When false (default), tabs size to their content.`,defaultValue:{value:"false",computed:!1}}}};const W={title:"Components/UnderlineTabs",component:y,parameters:{layout:"padded",docs:{description:{component:"Tabs allow users to navigate between related views of content while remaining in context of the page."}}},argTypes:{stretched:{control:"boolean"},activeId:{control:"text"}}};function i({tabs:n,stretched:t}){const[l,o]=S.useState(n[0].id);return e.jsx("div",{style:{width:t?480:void 0},children:e.jsx(y,{tabs:n,activeId:l,onChange:o,stretched:t})})}const j=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"}],c={render:()=>e.jsx(i,{tabs:j})},b={render:()=>e.jsx(i,{tabs:j,stretched:!0})},u={render:()=>e.jsx(i,{tabs:[{id:"all",label:"All"},{id:"unread",label:"Unread",counter:12},{id:"today",label:"Today",counter:3}]})},p={render:()=>e.jsx(i,{tabs:[{id:"tab1",label:"Active"},{id:"tab2",label:"Resting"},{id:"tab3",label:"Disabled",disabled:!0}]})},s=()=>e.jsxs("svg",{viewBox:"0 0 20 20",fill:"currentColor",style:{width:"100%",height:"100%"},children:[e.jsx("rect",{x:"3",y:"3",width:"14",height:"14",rx:"3",opacity:"0.4"}),e.jsx("circle",{cx:"10",cy:"10",r:"3"})]}),h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"'Fira Sans', sans-serif",fontSize:12,marginBottom:8,color:"#5d7682"},children:"Left icon"}),e.jsx(i,{tabs:[{id:"a",label:"Overview",icon:e.jsx(s,{}),iconPosition:"left"},{id:"b",label:"Details",icon:e.jsx(s,{}),iconPosition:"left"},{id:"c",label:"History",icon:e.jsx(s,{}),iconPosition:"left"}]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"'Fira Sans', sans-serif",fontSize:12,marginBottom:8,color:"#5d7682"},children:"Right icon"}),e.jsx(i,{tabs:[{id:"a",label:"Overview",icon:e.jsx(s,{}),iconPosition:"right"},{id:"b",label:"Details",icon:e.jsx(s,{}),iconPosition:"right"},{id:"c",label:"History",disabled:!0,icon:e.jsx(s,{}),iconPosition:"right"}]})]})]})},f={name:"All states (reference)",render:()=>{const n=[{id:"resting",label:"Resting"},{id:"selected",label:"Selected"},{id:"hover",label:"Hover (mouse over)"},{id:"disabled",label:"Disabled",disabled:!0}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"'Fira Sans', sans-serif"},children:[e.jsx(i,{tabs:n}),e.jsx(i,{tabs:[{id:"all",label:"All"},{id:"unread",label:"Unread",counter:5},{id:"today",label:"Today"}]})]})}},m={name:"Notifications panel usage",render:()=>e.jsx(i,{tabs:[{id:"all",label:"All"},{id:"unread",label:"Unread"},{id:"today",label:"Today"}]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled tabs={BASIC_TABS} />
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled tabs={BASIC_TABS} stretched />
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled tabs={[{
    id: 'all',
    label: 'All'
  }, {
    id: 'unread',
    label: 'Unread',
    counter: 12
  }, {
    id: 'today',
    label: 'Today',
    counter: 3
  }]} />
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled tabs={[{
    id: 'tab1',
    label: 'Active'
  }, {
    id: 'tab2',
    label: 'Resting'
  }, {
    id: 'tab3',
    label: 'Disabled',
    disabled: true
  }]} />
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <p style={{
        fontFamily: "'Fira Sans', sans-serif",
        fontSize: 12,
        marginBottom: 8,
        color: '#5d7682'
      }}>Left icon</p>
        <Controlled tabs={[{
        id: 'a',
        label: 'Overview',
        icon: <PlaceholderIcon />,
        iconPosition: 'left'
      }, {
        id: 'b',
        label: 'Details',
        icon: <PlaceholderIcon />,
        iconPosition: 'left'
      }, {
        id: 'c',
        label: 'History',
        icon: <PlaceholderIcon />,
        iconPosition: 'left'
      }]} />
      </div>
      <div>
        <p style={{
        fontFamily: "'Fira Sans', sans-serif",
        fontSize: 12,
        marginBottom: 8,
        color: '#5d7682'
      }}>Right icon</p>
        <Controlled tabs={[{
        id: 'a',
        label: 'Overview',
        icon: <PlaceholderIcon />,
        iconPosition: 'right'
      }, {
        id: 'b',
        label: 'Details',
        icon: <PlaceholderIcon />,
        iconPosition: 'right'
      }, {
        id: 'c',
        label: 'History',
        disabled: true,
        icon: <PlaceholderIcon />,
        iconPosition: 'right'
      }]} />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'All states (reference)',
  render: () => {
    const tabs: TabItem[] = [{
      id: 'resting',
      label: 'Resting'
    }, {
      id: 'selected',
      label: 'Selected'
    }, {
      id: 'hover',
      label: 'Hover (mouse over)'
    }, {
      id: 'disabled',
      label: 'Disabled',
      disabled: true
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      fontFamily: "'Fira Sans', sans-serif"
    }}>
        <Controlled tabs={tabs} />
        <Controlled tabs={[{
        id: 'all',
        label: 'All'
      }, {
        id: 'unread',
        label: 'Unread',
        counter: 5
      }, {
        id: 'today',
        label: 'Today'
      }]} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Notifications panel usage',
  render: () => <Controlled tabs={[{
    id: 'all',
    label: 'All'
  }, {
    id: 'unread',
    label: 'Unread'
  }, {
    id: 'today',
    label: 'Today'
  }]} />
}`,...m.parameters?.docs?.source}}};const U=["Default","Stretched","WithCounter","WithDisabled","WithIcons","AllStates","NotificationsExample"];export{f as AllStates,c as Default,m as NotificationsExample,b as Stretched,u as WithCounter,p as WithDisabled,h as WithIcons,U as __namedExportsOrder,W as default};
