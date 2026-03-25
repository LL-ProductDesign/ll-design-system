import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-BNWTn59m.js";import"./preload-helper-PPVm8Dsz.js";function C({value:n}){return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,borderRadius:999,background:"var(--background-brand)",fontFamily:"var(--font-family-base)",fontSize:9,fontWeight:600,color:"var(--text-invert)",lineHeight:1},children:n})}function D({item:n,active:t,stretched:l,onClick:o}){const[i,g]=v.useState(!1),s=!!n.disabled,S=i&&!s,m=t||i&&t?"var(--text-brand)":s?"var(--text-disabled)":"var(--text-secondary)",w=s?"var(--neutral-30)":t?"var(--background-brand)":"var(--border-color-primary)",y=!!n.icon,T=y&&(n.iconPosition??"left")==="left",I=y&&n.iconPosition==="right";return e.jsxs("button",{role:"tab","aria-selected":t,disabled:s,onClick:o,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,flex:l?"1 0 0":void 0,background:"none",border:"none",padding:0,cursor:s?"not-allowed":"pointer",minWidth:0},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:y||n.counter!=null?4:0,padding:"4px 16px",borderRadius:4,background:S?"var(--background-secondary)":"transparent",transition:"background 0.12s"},children:[T&&e.jsx("span",{style:{display:"inline-flex",width:20,height:20,color:m,flexShrink:0},children:n.icon}),e.jsx("span",{style:{fontFamily:"var(--font-family-base)",fontSize:14,fontWeight:600,color:m,lineHeight:"18px",whiteSpace:"nowrap",transition:"color 0.12s"},children:n.label}),n.counter!=null&&e.jsx(C,{value:n.counter}),I&&e.jsx("span",{style:{display:"inline-flex",width:20,height:20,color:m,flexShrink:0},children:n.icon})]}),e.jsx("div",{style:{height:2,width:"100%",borderRadius:1,background:w,transition:"background 0.12s",flexShrink:0}})]})}function x({tabs:n,activeId:t,onChange:l,stretched:o=!1}){return e.jsx("div",{role:"tablist",style:{display:"flex",alignItems:"stretch",height:29,overflow:"hidden",width:o?"100%":void 0},children:n.map(i=>e.jsx(D,{item:i,active:i.id===t,stretched:o,onClick:()=>!i.disabled&&l(i.id)},i.id))})}x.__docgenInfo={description:`Learnlight Design System — Underline Tabs

Tabs allow users to navigate between related views of content
while remaining in the context of the page.`,methods:[],displayName:"UnderlineTabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Tab definitions"},activeId:{required:!0,tsType:{name:"string"},description:"ID of the currently active tab"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called with the tab ID when a tab is clicked"},stretched:{required:!1,tsType:{name:"boolean"},description:`When true, tabs share the available width equally (flex-stretch).
When false (default), tabs size to their content.`,defaultValue:{value:"false",computed:!1}}}};const B={title:"Components/UnderlineTabs",component:x,parameters:{layout:"padded",docs:{description:{component:"Tabs allow users to navigate between related views of content while remaining in context of the page."}}},argTypes:{stretched:{control:"boolean"},activeId:{control:"text"}}};function a({tabs:n,stretched:t}){const[l,o]=v.useState(n[0].id);return e.jsx("div",{style:{width:t?480:void 0},children:e.jsx(x,{tabs:n,activeId:l,onChange:o,stretched:t})})}const j=[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"}],d={render:()=>e.jsx(a,{tabs:j})},c={render:()=>e.jsx(a,{tabs:j,stretched:!0})},b={render:()=>e.jsx(a,{tabs:[{id:"all",label:"All"},{id:"unread",label:"Unread",counter:12},{id:"today",label:"Today",counter:3}]})},u={render:()=>e.jsx(a,{tabs:[{id:"tab1",label:"Active"},{id:"tab2",label:"Resting"},{id:"tab3",label:"Disabled",disabled:!0}]})},r=()=>e.jsxs("svg",{viewBox:"0 0 20 20",fill:"currentColor",style:{width:"100%",height:"100%"},children:[e.jsx("rect",{x:"3",y:"3",width:"14",height:"14",rx:"3",opacity:"0.4"}),e.jsx("circle",{cx:"10",cy:"10",r:"3"})]}),h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--font-family-base)",fontSize:12,marginBottom:8,color:"var(--text-secondary)"},children:"Left icon"}),e.jsx(a,{tabs:[{id:"a",label:"Overview",icon:e.jsx(r,{}),iconPosition:"left"},{id:"b",label:"Details",icon:e.jsx(r,{}),iconPosition:"left"},{id:"c",label:"History",icon:e.jsx(r,{}),iconPosition:"left"}]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--font-family-base)",fontSize:12,marginBottom:8,color:"var(--text-secondary)"},children:"Right icon"}),e.jsx(a,{tabs:[{id:"a",label:"Overview",icon:e.jsx(r,{}),iconPosition:"right"},{id:"b",label:"Details",icon:e.jsx(r,{}),iconPosition:"right"},{id:"c",label:"History",disabled:!0,icon:e.jsx(r,{}),iconPosition:"right"}]})]})]})},p={name:"All states (reference)",render:()=>{const n=[{id:"resting",label:"Resting"},{id:"selected",label:"Selected"},{id:"hover",label:"Hover (mouse over)"},{id:"disabled",label:"Disabled",disabled:!0}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"var(--font-family-base)"},children:[e.jsx(a,{tabs:n}),e.jsx(a,{tabs:[{id:"all",label:"All"},{id:"unread",label:"Unread",counter:5},{id:"today",label:"Today"}]})]})}},f={name:"Notifications panel usage",render:()=>e.jsx(a,{tabs:[{id:"all",label:"All"},{id:"unread",label:"Unread"},{id:"today",label:"Today"}]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled tabs={BASIC_TABS} />
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled tabs={BASIC_TABS} stretched />
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <p style={{
        fontFamily: 'var(--font-family-base)',
        fontSize: 12,
        marginBottom: 8,
        color: 'var(--text-secondary)'
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
        fontFamily: 'var(--font-family-base)',
        fontSize: 12,
        marginBottom: 8,
        color: 'var(--text-secondary)'
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      fontFamily: 'var(--font-family-base)'
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const R=["Default","Stretched","WithCounter","WithDisabled","WithIcons","AllStates","NotificationsExample"];export{p as AllStates,d as Default,f as NotificationsExample,c as Stretched,b as WithCounter,u as WithDisabled,h as WithIcons,R as __namedExportsOrder,B as default};
