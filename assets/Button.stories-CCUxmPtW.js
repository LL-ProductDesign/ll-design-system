import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as H}from"./iframe-BNWTn59m.js";import{i as Y,I as J}from"./Icons-BQznmR0U.js";import{e as N}from"./tokens-D4qHVeFC.js";import"./preload-helper-PPVm8Dsz.js";const Q={primary:{bg:"var(--background-brand)",bgHover:"var(--blue-700)",bgDisabled:"var(--button-bg-disabled)",text:"var(--text-invert)",textDisabled:"var(--text-invert)",border:"transparent"},secondary:{bg:"transparent",bgHover:"var(--background-blue-light)",bgDisabled:"transparent",text:"var(--text-brand)",textDisabled:"var(--button-bg-disabled)",border:"var(--border-color-brand)",borderDisabled:"var(--button-bg-disabled)"},txt:{bg:"transparent",bgHover:"var(--background-blue-light)",bgDisabled:"transparent",text:"var(--text-brand)",textDisabled:"var(--button-bg-disabled)",border:"transparent"},txt_grey:{bg:"transparent",bgHover:"var(--background-secondary)",bgDisabled:"transparent",text:"var(--text-secondary)",textDisabled:"var(--button-bg-disabled)",border:"transparent"}},ee={l:{height:40,paddingX:8,fontSize:14,iconSize:16,gap:6},m:{height:32,paddingX:8,fontSize:13,iconSize:14,gap:5},s:{height:24,paddingX:8,fontSize:12,iconSize:12,gap:4}},E=t=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":!0,children:[e.jsx("rect",{x:"2",y:"4",width:"12",height:"1.5",rx:"0.75"}),e.jsx("rect",{x:"2",y:"7.25",width:"12",height:"1.5",rx:"0.75"}),e.jsx("rect",{x:"2",y:"10.5",width:"12",height:"1.5",rx:"0.75"})]});function o({variant:t="primary",size:a="m",content:i="default",isDisabled:r=!1,leftIcon:n=!1,rightIcon:c=!1,selectIconLeft:d,selectIconRight:q,text:P="Button",onClick:U,...X}){const[$,W]=H.useState(!1),s=Q[t],l=ee[a],G=r?"bgDisabled"in s?s.bgDisabled:s.bg:$?s.bgHover:s.bg,_=r&&"textDisabled"in s?s.textDisabled:s.text,K=t==="secondary"?`1.5px solid ${r?s.borderDisabled:s.border}`:"1.5px solid transparent",p=i==="icon_only",Z=p?l.height:void 0;return e.jsxs("button",{type:"button",disabled:r,onClick:U,onMouseEnter:()=>W(!0),onMouseLeave:()=>W(!1),style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:l.gap,height:l.height,width:Z,paddingLeft:p?0:l.paddingX,paddingRight:p?0:l.paddingX,background:G,color:_,border:K,borderRadius:"var(--border-radius-interactive)",fontSize:l.fontSize,fontFamily:"var(--font-family-base)",fontWeight:"var(--font-weight-semibold)",lineHeight:1,cursor:r?"not-allowed":"pointer",transition:"background 0.15s, color 0.15s",whiteSpace:"nowrap",outline:"none",userSelect:"none"},...X,children:[!p&&n&&e.jsx("span",{style:{display:"flex",alignItems:"center",color:_},children:d??E(l.iconSize)}),p?d??E(l.iconSize):e.jsx("span",{children:P}),!p&&c&&e.jsx("span",{style:{display:"flex",alignItems:"center",color:_},children:q??E(l.iconSize)})]})}o.__docgenInfo={description:"Learnlight Design System — Button",methods:[],displayName:"LearnlightButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'txt' | 'txt_grey'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'txt_grey'"}]},description:`Visual style variant.
- 'primary': filled blue — main call-to-action
- 'secondary': outlined blue
- 'txt': text-only with blue label
- 'txt_grey': text-only with grey label
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'l' | 'm' | 's'",elements:[{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"}]},description:`Size of the button.
- 'l': 40px height (large)
- 'm': 32px height (medium)
- 's': 24px height (small)
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},content:{required:!1,tsType:{name:"union",raw:"'default' | 'icon_only'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'icon_only'"}]},description:`Layout mode.
- 'default': label with optional icons
- 'icon_only': icon only, no label
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the button is disabled.
Disables interaction and renders muted colours.
@default false`,defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show an icon on the left of the label.
@default false`,defaultValue:{value:"false",computed:!1}},rightIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show an icon on the right of the label.
@default false`,defaultValue:{value:"false",computed:!1}},selectIconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom React node rendered as the left icon.
Only rendered when leftIcon is true.`},selectIconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom React node rendered as the right icon.
Only rendered when rightIcon is true.`},text:{required:!1,tsType:{name:"string"},description:`Button label text.
@default 'Button'`,defaultValue:{value:"'Button'",computed:!1}}},composes:["Omit"]};const{expect:A,fn:M,userEvent:O,within:te}=__STORYBOOK_MODULE_TEST__,F=["none",...Y],re={l:16,m:14,s:12};function V(t,a){return t&&t!=="none"?e.jsx(J,{name:t,size:a}):void 0}const ce={title:"Components/Button",component:o,parameters:{layout:"centered"},tags:["autodocs"],render:({leftIconName:t,rightIconName:a,size:i="m",...r})=>{const n=re[i],c=V(t,n),d=V(a,n);return e.jsx(o,{...r,size:i,leftIcon:!!c,rightIcon:!!d,selectIconLeft:c,selectIconRight:d})},argTypes:{variant:{control:"select",options:["primary","secondary","txt","txt_grey"],description:"Visual style variant"},size:{control:"select",options:["l","m","s"],description:"Button size — l=40px, m=32px, s=24px"},content:{control:"select",options:["default","icon_only"],description:"Layout mode"},isDisabled:{control:"boolean"},leftIcon:{table:{disable:!0}},rightIcon:{table:{disable:!0}},selectIconLeft:{table:{disable:!0}},selectIconRight:{table:{disable:!0}},text:{control:"text"},onClick:{action:"clicked"},leftIconName:{control:"select",options:F,description:'Left icon — select an icon to enable, "none" to hide',table:{category:"Icons"}},rightIconName:{control:"select",options:F,description:'Right icon — select an icon to enable, "none" to hide',table:{category:"Icons"}}},args:{onClick:M(),leftIconName:"none",rightIconName:"none"}},m={args:{variant:"primary",size:"m",text:"Button"}},u={args:{variant:"primary",text:"Button"},play:async({canvasElement:t,args:a})=>{const r=te(t).getByRole("button");await O.click(r),A(a.onClick).toHaveBeenCalledTimes(1),await O.tab(),await O.keyboard("{Enter}"),A(a.onClick).toHaveBeenCalledTimes(2)}},g={args:{variant:"secondary",text:"Button"}},x={name:"Text (Blue)",args:{variant:"txt",text:"Button"}},y={name:"Text (Grey)",args:{variant:"txt_grey",text:"Button"}},b={name:"Size / Large (40px)",args:{size:"l",text:"Large"}},h={name:"Size / Medium (32px)",args:{size:"m",text:"Medium"}},v={name:"Size / Small (24px)",args:{size:"s",text:"Small"}},f={name:"Size / All Sizes",render:t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(o,{...t,size:"l",text:"Large (40px)"}),e.jsx(o,{...t,size:"m",text:"Medium (32px)"}),e.jsx(o,{...t,size:"s",text:"Small (24px)"})]}),args:{variant:"primary"}},S={args:{isDisabled:!0,text:"Disabled"}},I={name:"Disabled / Secondary",args:{variant:"secondary",isDisabled:!0,text:"Disabled"}},z={name:"Disabled / Text",args:{variant:"txt",isDisabled:!0,text:"Disabled"}},T={name:"Icons / Left Icon",args:{leftIconName:"search",text:"With Icon"}},B={name:"Icons / Right Icon",args:{rightIconName:"arrow-right",text:"With Icon"}},D={name:"Icons / Both Icons",args:{leftIconName:"search",rightIconName:"arrow-right",text:"With Icons"}},k={name:"Icons / Icon Only",args:{leftIconName:"search",content:"icon_only"}},j={name:"Edge / Long Label",args:{text:"This is a very long button label that exceeds fifty characters",variant:"primary"}},L={name:"Edge / Single Character",args:{text:"A",variant:"secondary"}},w={name:"Edge / Inside Form",render:t=>e.jsxs("form",{onSubmit:a=>{a.preventDefault(),alert("Form submitted!")},style:{display:"flex",flexDirection:"column",gap:12,padding:24,border:"1px solid var(--border-color-primary)",borderRadius:8,minWidth:280},children:[e.jsxs("label",{style:{fontSize:13,color:"var(--text-primary)"},children:["Email",e.jsx("input",{type:"email",placeholder:"you@example.com",style:{display:"block",marginTop:4,width:"100%",padding:"6px 8px",border:"1px solid var(--border-color-primary)",borderRadius:4,fontSize:13,boxSizing:"border-box"}})]}),e.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[e.jsx(o,{...t,variant:"txt_grey",text:"Cancel"}),e.jsx(o,{...t,variant:"primary",text:"Submit"})]})]}),args:{onClick:M()}},ae={bg:"Background",bgHover:"Background (hover)",bgDisabled:"Background (disabled)",text:"Text",textDisabled:"Text (disabled)",border:"Border",borderDisabled:"Border (disabled)"},R={name:"Token Usage",render:()=>{const t=Object.keys(N);return e.jsxs("div",{style:{fontFamily:"var(--font-family-base)",maxWidth:860,padding:"8px 0"},children:[e.jsx("p",{style:{margin:"0 0 28px",fontSize:12,color:"var(--text-secondary)"},children:"Each variant's colour slots mapped to their design token name."}),t.map(a=>{const i=N[a];return e.jsxs("div",{style:{marginBottom:36},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:14},children:[e.jsx("h3",{style:{margin:0,fontSize:13,fontWeight:700,color:"var(--text-primary)",textTransform:"uppercase",letterSpacing:"0.06em",minWidth:80},children:a}),e.jsx(o,{variant:a,size:"m",text:"Preview"}),e.jsx(o,{variant:a,size:"m",text:"Disabled",isDisabled:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"160px 140px 40px",gap:"6px 16px",alignItems:"center"},children:[["Slot","Token",""].map(r=>e.jsx("div",{style:{fontSize:10,fontWeight:700,color:"var(--neutral-80)",textTransform:"uppercase",letterSpacing:"0.06em",paddingBottom:4,borderBottom:"1px solid var(--border-color-primary)"},children:r},r)),Object.entries(i).map(([r,n])=>{const c=n.value==="transparent"||n.value==="#0000000a";return e.jsxs(H.Fragment,{children:[e.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:ae[r]??r}),e.jsx("div",{style:{fontSize:11,fontFamily:"monospace",color:"var(--text-primary)",background:"var(--background-secondary)",padding:"2px 6px",borderRadius:4},children:n.token}),e.jsx("div",{title:n.value,style:{width:28,height:18,borderRadius:4,background:c?"repeating-conic-gradient(#dfe4e6 0% 25%, #fff 0% 50%) 0 0 / 8px 8px":n.value,border:"1px solid rgba(0,0,0,0.1)"}})]},r)})]})]},a)})]})}},C={name:"All Variants",render:()=>{const t=["primary","secondary","txt","txt_grey"],a=["l","m","s"],i=[{label:"Default",props:{}},{label:"Left icon",props:{leftIcon:!0}},{label:"Right icon",props:{rightIcon:!0}},{label:"Both icons",props:{leftIcon:!0,rightIcon:!0}},{label:"Icon only",props:{content:"icon_only"}},{label:"Disabled",props:{isDisabled:!0}}];return e.jsx("div",{style:{fontFamily:"var(--font-family-base)",overflowX:"auto"},children:t.map(r=>e.jsxs("div",{style:{marginBottom:40},children:[e.jsx("h3",{style:{margin:"0 0 12px",fontSize:13,color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:r}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto)",gap:"12px 24px",alignItems:"center",justifyItems:"start"},children:[a.map(n=>e.jsxs("div",{style:{fontSize:11,color:"var(--neutral-80)",textAlign:"center"},children:[n.toUpperCase()," — ",n==="l"?"40px":n==="m"?"32px":"24px"]},n)),i.map(({label:n,props:c})=>a.map(d=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[e.jsx(o,{variant:r,size:d,text:"Button",...c}),e.jsx("span",{style:{fontSize:10,color:"var(--neutral-80)"},children:n})]},`${n}-${d}`)))]})]},r))})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'm',
    text: 'Button'
  }
}`,...m.parameters?.docs?.source},description:{story:"Interactive playground — use controls to change variant, size, and icons",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    text: 'Button'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Click fires the handler
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalledTimes(1);

    // Keyboard: tab focus then enter
    await userEvent.tab();
    await userEvent.keyboard('{Enter}');
    expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...u.parameters?.docs?.source},description:{story:"Filled blue — main call-to-action",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    text: 'Button'
  }
}`,...g.parameters?.docs?.source},description:{story:"Outlined blue — secondary action",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Text (Blue)',
  args: {
    variant: 'txt',
    text: 'Button'
  }
}`,...x.parameters?.docs?.source},description:{story:"Text-only with blue label — low-emphasis action",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Text (Grey)',
  args: {
    variant: 'txt_grey',
    text: 'Button'
  }
}`,...y.parameters?.docs?.source},description:{story:"Text-only with grey label — minimal-emphasis action",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Size / Large (40px)',
  args: {
    size: 'l',
    text: 'Large'
  }
}`,...b.parameters?.docs?.source},description:{story:"Large — 40px height",...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Size / Medium (32px)',
  args: {
    size: 'm',
    text: 'Medium'
  }
}`,...h.parameters?.docs?.source},description:{story:"Medium — 32px height",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Size / Small (24px)',
  args: {
    size: 's',
    text: 'Small'
  }
}`,...v.parameters?.docs?.source},description:{story:"Small — 24px height",...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Size / All Sizes',
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <LearnlightButton {...args} size="l" text="Large (40px)" />
      <LearnlightButton {...args} size="m" text="Medium (32px)" />
      <LearnlightButton {...args} size="s" text="Small (24px)" />
    </div>,
  args: {
    variant: 'primary'
  }
}`,...f.parameters?.docs?.source},description:{story:"All three sizes side by side",...f.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    text: 'Disabled'
  }
}`,...S.parameters?.docs?.source},description:{story:"Disabled state — all interactions blocked",...S.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Disabled / Secondary',
  args: {
    variant: 'secondary',
    isDisabled: true,
    text: 'Disabled'
  }
}`,...I.parameters?.docs?.source},description:{story:"Disabled secondary",...I.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Disabled / Text',
  args: {
    variant: 'txt',
    isDisabled: true,
    text: 'Disabled'
  }
}`,...z.parameters?.docs?.source},description:{story:"Disabled text",...z.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Left Icon',
  args: {
    leftIconName: 'search',
    text: 'With Icon'
  }
}`,...T.parameters?.docs?.source},description:{story:"Left icon + label",...T.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Right Icon',
  args: {
    rightIconName: 'arrow-right',
    text: 'With Icon'
  }
}`,...B.parameters?.docs?.source},description:{story:"Right icon + label",...B.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Both Icons',
  args: {
    leftIconName: 'search',
    rightIconName: 'arrow-right',
    text: 'With Icons'
  }
}`,...D.parameters?.docs?.source},description:{story:"Both icons flanking the label",...D.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Icon Only',
  args: {
    leftIconName: 'search',
    content: 'icon_only'
  }
}`,...k.parameters?.docs?.source},description:{story:"Icon-only — no label",...k.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Edge / Long Label',
  args: {
    text: 'This is a very long button label that exceeds fifty characters',
    variant: 'primary'
  }
}`,...j.parameters?.docs?.source},description:{story:"Long label — 50+ characters to verify truncation / wrapping behaviour",...j.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Edge / Single Character',
  args: {
    text: 'A',
    variant: 'secondary'
  }
}`,...L.parameters?.docs?.source},description:{story:"Short single character",...L.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Edge / Inside Form',
  render: args => <form onSubmit={e => {
    e.preventDefault();
    alert('Form submitted!');
  }} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 24,
    border: '1px solid var(--border-color-primary)',
    borderRadius: 8,
    minWidth: 280
  }}>
      <label style={{
      fontSize: 13,
      color: 'var(--text-primary)'
    }}>
        Email
        <input type="email" placeholder="you@example.com" style={{
        display: 'block',
        marginTop: 4,
        width: '100%',
        padding: '6px 8px',
        border: '1px solid var(--border-color-primary)',
        borderRadius: 4,
        fontSize: 13,
        boxSizing: 'border-box'
      }} />
      </label>
      <div style={{
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }}>
        <LearnlightButton {...args} variant="txt_grey" text="Cancel" />
        <LearnlightButton {...args} variant="primary" text="Submit" />
      </div>
    </form>,
  args: {
    onClick: fn()
  }
}`,...w.parameters?.docs?.source},description:{story:'Inside a form — verifies default type="button" does not submit',...w.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Token Usage',
  render: () => {
    const variants = Object.keys(buttonTokens) as Array<keyof typeof buttonTokens>;
    return <div style={{
      fontFamily: 'var(--font-family-base)',
      maxWidth: 860,
      padding: '8px 0'
    }}>
        <p style={{
        margin: '0 0 28px',
        fontSize: 12,
        color: 'var(--text-secondary)'
      }}>
          Each variant's colour slots mapped to their design token name.
        </p>
        {variants.map(variant => {
        const slots = buttonTokens[variant];
        return <div key={variant} style={{
          marginBottom: 36
        }}>
              {/* Variant header with live preview */}
              <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 14
          }}>
                <h3 style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 700,
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              minWidth: 80
            }}>
                  {variant}
                </h3>
                <LearnlightButton variant={variant} size="m" text="Preview" />
                <LearnlightButton variant={variant} size="m" text="Disabled" isDisabled />
              </div>

              {/* Token rows */}
              <div style={{
            display: 'grid',
            gridTemplateColumns: '160px 140px 40px',
            gap: '6px 16px',
            alignItems: 'center'
          }}>
                {/* Header */}
                {['Slot', 'Token', ''].map(h => <div key={h} style={{
              fontSize: 10,
              fontWeight: 700,
              color: 'var(--neutral-80)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              paddingBottom: 4,
              borderBottom: '1px solid var(--border-color-primary)'
            }}>{h}</div>)}

                {/* Rows */}
                {(Object.entries(slots) as Array<[string, {
              token: string;
              value: string;
            }]>).map(([slot, t]) => {
              const isTransparent = t.value === 'transparent' || t.value === '#0000000a';
              return <React.Fragment key={slot}>
                      <div style={{
                  fontSize: 12,
                  color: 'var(--text-secondary)'
                }}>{SLOT_LABELS[slot] ?? slot}</div>
                      <div style={{
                  fontSize: 11,
                  fontFamily: 'monospace',
                  color: 'var(--text-primary)',
                  background: 'var(--background-secondary)',
                  padding: '2px 6px',
                  borderRadius: 4
                }}>
                        {t.token}
                      </div>
                      <div title={t.value} style={{
                  width: 28,
                  height: 18,
                  borderRadius: 4,
                  background: isTransparent ? 'repeating-conic-gradient(#dfe4e6 0% 25%, #fff 0% 50%) 0 0 / 8px 8px' : t.value,
                  border: '1px solid rgba(0,0,0,0.1)'
                }} />
                    </React.Fragment>;
            })}
              </div>
            </div>;
      })}
      </div>;
  }
}`,...R.parameters?.docs?.source},description:{story:`Maps each button variant to the design tokens it consumes.
Every colour swatch is a direct reference to the Color Palette story.`,...R.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => {
    const variants = ['primary', 'secondary', 'txt', 'txt_grey'] as const;
    const sizes = ['l', 'm', 's'] as const;
    const states: Array<{
      label: string;
      props: Partial<React.ComponentProps<typeof LearnlightButton>>;
    }> = [{
      label: 'Default',
      props: {}
    }, {
      label: 'Left icon',
      props: {
        leftIcon: true
      }
    }, {
      label: 'Right icon',
      props: {
        rightIcon: true
      }
    }, {
      label: 'Both icons',
      props: {
        leftIcon: true,
        rightIcon: true
      }
    }, {
      label: 'Icon only',
      props: {
        content: 'icon_only'
      }
    }, {
      label: 'Disabled',
      props: {
        isDisabled: true
      }
    }];
    return <div style={{
      fontFamily: 'var(--font-family-base)',
      overflowX: 'auto'
    }}>
        {variants.map(variant => <div key={variant} style={{
        marginBottom: 40
      }}>
            <h3 style={{
          margin: '0 0 12px',
          fontSize: 13,
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
              {variant}
            </h3>
            <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, auto)',
          gap: '12px 24px',
          alignItems: 'center',
          justifyItems: 'start'
        }}>
              {/* column headers */}
              {sizes.map(s => <div key={s} style={{
            fontSize: 11,
            color: 'var(--neutral-80)',
            textAlign: 'center'
          }}>
                  {s.toUpperCase()} — {s === 'l' ? '40px' : s === 'm' ? '32px' : '24px'}
                </div>)}
              {states.map(({
            label,
            props
          }) => sizes.map(s => <div key={\`\${label}-\${s}\`} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4
          }}>
                    <LearnlightButton variant={variant} size={s} text="Button" {...props} />
                    <span style={{
              fontSize: 10,
              color: 'var(--neutral-80)'
            }}>{label}</span>
                  </div>))}
            </div>
          </div>)}
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Every variant × size × state at a glance",...C.parameters?.docs?.description}}};const de=["Default","Primary","Secondary","TextBlue","TextGrey","SizeLarge","SizeMedium","SizeSmall","AllSizes","Disabled","DisabledSecondary","DisabledText","WithLeftIcon","WithRightIcon","WithBothIcons","IconOnly","LongText","ShortText","InsideForm","TokenUsage","AllVariants"];export{f as AllSizes,C as AllVariants,m as Default,S as Disabled,I as DisabledSecondary,z as DisabledText,k as IconOnly,w as InsideForm,j as LongText,u as Primary,g as Secondary,L as ShortText,b as SizeLarge,h as SizeMedium,v as SizeSmall,x as TextBlue,y as TextGrey,R as TokenUsage,D as WithBothIcons,T as WithLeftIcon,B as WithRightIcon,de as __namedExportsOrder,ce as default};
