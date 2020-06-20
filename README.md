# React Pakistan

<div>
  <a
    href="https://react-pakistan.github.io/react-pakistan-docs/"
    target="_blank"
  >
    <img
      alt="React Pakistan - React Commons Collection"
      src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg"
      width="70%"
    />
  </a>
  <a
    href="https://react-pakistan.github.io/react-pakistan-docs/"
    target="_blank"
  >
    <img
      alt="Taimoor Khan - React Commons Collection Author"
      src="https://avatars1.githubusercontent.com/u/27800340?s=460&v=4"
      width="20%"
    />
  </a>
</div>

React Pakistan is an OpenSource & Free Software (FOSS) platform, creating React software solutions for the global community.

![](https://github.com/actions/react-commons-collection/workflows/github-ci/badge.svg?event=push)

## React Commons Collection

<div>
  <a
    href="https://taimoormk.github.io/react-commons-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React Commons Collection"
      src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1566265693/GitHub/react-commons-collection.jpg"
      width="70%"
    />
  </a>
  <a
    href="https://www.npmjs.com/package/@react-pakistan/react-commons-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React Commons Collection - NPM Package"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-"
      width="20%"
    />
  </a>
</div>

A generic, Commons library for React web apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

## Install

Add React Commons Collection to your project. 

`yarn add @react-pakistan/react-commons-collection` or
`npm install @react-pakistan/react-commons-collection`

### **Styles**

Styled Components are employed to maintain and update theme for this project. Please consider adding Styled Component Provider wrapper to the entry point of your application, following is the sample code.
You could either use the default theme as shown below or wire your custom theme object instead. See <a href="/docs/styleguide-typography--typography-story">Typography</a> & <a href="/docs/styleguide-colors--colors-story">Colors</a> being used in the theme object.

```javascript
  import { ThemeProvider } from 'styled-components';
  import { theme } from '@react-pakistan/react-commons-collection/theme';

  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
```

### **Use**

- [A](https://taimoormk.github.io/react-commons-collection/?path=/story/link-a--a-story)
```javascript
  import { A } from '@react-pakistan/react-commons-collection';

  <A
    color="#000000"
    desktop=""
    download=""
    href="https://google.com"
    hreflang=""
    laptop=""
    laptopL=""
    media=""
    mobileL=""
    mobileM=""
    mobileS=""
    referrerpolicy=""
    rel=""
    tablet=""
    target="_blank"
    type=""
  >
    Go to Google
  </A>
```

- [Audio](https://taimoormk.github.io/react-commons-collection/?path=/story/media-audio--audio-story)
```javascript
  import { Audio } from '@react-pakistan/react-commons-collection';

  <Audio
    autoplay
    controlPanelColor="#F7F7F7"
    controls
    currentTimeColor="#00D3CA"
    desktop=""
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    preload="auto"
    remainingTimeColor="#F62F5E"
    src="https://notificationsounds.com/sound-effects/insight-578/download/mp3"
    tablet=""
  />
```

- [Background Image](https://taimoormk.github.io/react-commons-collection/?path=/story/media-backgroundimage--background-image-story)
```javascript
  import { BackgroundImage } from '@react-pakistan/react-commons-collection';

  <BackgroundImage
    desktop=""
    imageBackgroundColor="#6C6C6C"
    imageBackgroundHeight="400px"
    imageBackgroundMargin="0"
    imageBackgroundPadding="0"
    imageBackgroundPosition="center center"
    imageBackgroundRepeat="no-repeat"
    imageBackgroundSize="cover"
    imageBackgroundUrl="https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
    imageBackgroundWidth="600px"
    imageBorderRadius="0"
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
  />
```

- [Button](https://taimoormk.github.io/react-commons-collection/?path=/story/form-button--button-story)
```javascript
  import { Button } from '@react-pakistan/react-commons-collection';

  <Button
    autoFocus
    backgroundColor="#FFFFFF"
    border="1px solid #EFEFEF"
    borderRadius="0.5em"
    desktop=""
    form=""
    formaction=""
    formenctype="text/plain"
    formmethod="get"
    formtarget="_self"
    height="auto"
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    name=""
    onClick={function noRefCheck(){}}
    padding="1em"
    tablet=""
    type="button"
    value=""
    width="auto"
  >
    Hello World
  </Button>
```

- [Canvas](https://taimoormk.github.io/react-commons-collection/?path=/story/media-canvas--canvas-story)
```javascript
  import { Canvas } from '@react-pakistan/react-commons-collection';

  <Canvas
    border="1px solid #000000"
    desktop=""
    height="400px"
    id="canvasId"
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    width="600px"
  />
```

- [CheckBox](https://taimoormk.github.io/react-commons-collection/?path=/story/input-checkbox--check-box-story)
```javascript
  import { CheckBox } from '@react-pakistan/react-commons-collection';

  <State
    initial={{
      isChecked: false
    }}
  />
```

- [ChildGrid](https://taimoormk.github.io/react-commons-collection/?path=/story/layout-childgrid--child-grid-story)
```javascript
  import { ChildGrid } from '@react-pakistan/react-commons-collection';

  <ChildGrid
    alignSelf="center"
    desktop=""
    gridColumnEnd={1}
    gridColumnStart={1}
    gridRowEnd={1}
    gridRowStart={1}
    justifySelf="center"
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
  >
    ChildGrid Component
  </ChildGrid>
```

- [ColumnContainer](https://taimoormk.github.io/react-commons-collection/?path=/story/layout-columncontainer--column-container-story)
```javascript
  import { ColumnContainer } from '@react-pakistan/react-commons-collection';

  <ColumnContainer
    alignItems="center"
    desktop="display: flex;"
    justifyContent="center"
    laptop="display: flex;"
    laptopL="display: flex;"
    mobileL="display: flex;"
    mobileM="display: flex;"
    mobileS="display: flex;"
    tablet="display: flex;"
  >
    ColumnContainer Component
  </ColumnContainer>
```

- [Grid](https://taimoormk.github.io/react-commons-collection/?path=/story/layout-grid--grid-story)
```javascript
  import { Grid } from '@react-pakistan/react-commons-collection/grid';

  <Grid
    alignItems="center"
    columnGap="1em"
    desktop="grid-template-columns: 1fr 1fr 1fr 1fr;"
    gridColumn="1fr 1fr 1fr"
    gridRow="1fr 1fr"
    height="auto"
    justifyItems="stretch"
    laptop="grid-template-columns: 1fr 1fr 1fr 1fr;"
    laptopL="grid-template-columns: 1fr 1fr 1fr 1fr;"
    mobileL="grid-template-columns: 1fr;"
    mobileM="grid-template-columns: 1fr;"
    mobileS="grid-template-columns: 1fr;"
    rowGap="1em"
    tablet="grid-template-columns: 1fr 1fr 1fr;"
    width="100%"
  >
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
  </Grid>
```

- [Footer](https://taimoormk.github.io/react-commons-collection/?path=/story/layout-footer--footer-story)
```javascript
  import { Footer } from '@react-pakistan/react-commons-collection';

  <Footer
    desktop=""
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
  >
    Footer component
  </Footer>
```

- [H1](https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h1--h-1-story)
```javascript
  import { H1 } from '@react-pakistan/react-commons-collection';

  <H1
    color="#2E2E2E"
    desktop=""
    fontFamily="Playfair Display"
    fontSize="2em"
    fontWeight={700}
    laptop=""
    laptopL=""
    letterSpacing="1px"
    lineHeight="normal"
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    textAlign="left"
    textTransform="uppercase"
  >
    H1 Component
  </H1>
```

- [H2](https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h2--h-2-story)
```javascript
  import { H2 } from '@react-pakistan/react-commons-collection';

  <H2
    color="#2E2E2E"
    desktop=""
    fontFamily="Montserrat"
    fontSize="1.8em"
    fontWeight={700}
    laptop=""
    laptopL=""
    letterSpacing="1px"
    lineHeight="normal"
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    textAlign="left"
    textTransform="uppercase"
  >
    H2 Component
  </H2>
```

- [H3](https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h3--h-3-story)
```javascript
  import { H3 } from '@react-pakistan/react-commons-collection';

  <H3
    color="#2E2E2E"
    desktop=""
    fontFamily="Montserrat"
    fontSize="1.6em"
    fontWeight={700}
    laptop=""
    laptopL=""
    letterSpacing="1px"
    lineHeight="normal"
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    textAlign="left"
    textTransform="uppercase"
  >
    H3 Component
  </H3>
```

- [H4](https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h4--h-4-story)
```javascript
  import { H4 } from '@react-pakistan/react-commons-collection';

  <H4
    color="#2E2E2E"
    desktop=""
    fontFamily="Montserrat"
    fontSize="1.4em"
    fontWeight={700}
    laptop=""
    laptopL=""
    letterSpacing="1px"
    lineHeight="normal"
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    textAlign="uppercase"
    textTransform="uppercase"
  >
    H4 Component
  </H4>
```

- [H5](https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h5--h-5-story)
```javascript
  import { H5 } from '@react-pakistan/react-commons-collection';

  <H5
    color="#2E2E2E"
    desktop=""
    fontFamily="Montserrat"
    fontSize="1.2em"
    fontWeight={700}
    laptop=""
    laptopL=""
    letterSpacing="1px"
    lineHeight="normal"
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    textAlign="left"
    textTransform="uppercase"
  >
    H5 Component
  </H5>
```

- [Header](https://taimoormk.github.io/react-commons-collection/?path=/story/layout-header--header-story)
```javascript
  import { Header } from '@react-pakistan/react-commons-collection';

  <Header>
    Header component
  </Header>
```

- [HR](https://taimoormk.github.io/react-commons-collection/?path=/story/misc-hr--hr-story)
```javascript
  import { HR } from '@react-pakistan/react-commons-collection';

  <HR
    border="1px solid #1E90FF"
    width="100%"
  />
```

-[Iframe](https://taimoormk.github.io/react-commons-collection/?path=/story/media-iframe--iframe-story)
```javascript
  import { Iframe } from '@react-pakistan/react-commons-collection/iframe';

  <Iframe
    desktop=""
    height="600px"
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    name="iframe"
    sandbox="allow-scripts"
    src="http://geekmarketers.xyz"
    tablet=""
    width="800px"
  />
```

- [Image](https://taimoormk.github.io/react-commons-collection/?path=/story/media-image--image-story)
```javascript
  import { Image } from '@react-pakistan/react-commons-collection';

  <Image
    alt="alt-image"
    desktop=""
    height="auto"
    laptop=""
    laptopL=""
    margin="0"
    mobileL=""
    mobileM=""
    mobileS=""
    padding="0"
    src="https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
    tablet=""
    width="600px"
  />
```

- [Input](https://taimoormk.github.io/react-commons-collection/?path=/story/input-input--input-story)
```javascript
  import { Input } from '@react-pakistan/react-commons-collection';

  <State
    initial={{
      value: ''
    }}
   />
```

- [InputWithLabel](https://taimoormk.github.io/react-commons-collection/?path=/story/input-input--input-with-label-story)
```javascript
  import { Input } from '@react-pakistan/react-commons-collection';

  <State
    initial={{
      value: ''
    }}
   />
```

- [Li](https://taimoormk.github.io/react-commons-collection/?path=/story/misc-li--li-story)
```javascript
  import { Li } from '@react-pakistan/react-commons-collection';

  <Li
    desktop=""
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    progressBarActiveDotBorder={undefined}
    progressBarActiveDotColor={undefined}
    progressBarDotSize="20px"
    progressBarIsActive
    tablet=""
    type="default"
  />
```

- [ProgressBar](https://taimoormk.github.io/react-commons-collection/?path=/story/media-progressbar--progress-bar-story)
```javascript
  import { ProgressBar } from '@react-pakistan/react-commons-collection';

  <ProgressBar
    backgroundColorBar="#F62F5E"
    backgroundColorValue="#EFFC90"
    desktop=""
    height="0.25em"
    laptop=""
    laptopL=""
    max="100"
    min="0"
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    transition="2.5s ease-out"
    value="20"
    width="100%"
  />
```

- [RadioButton](https://taimoormk.github.io/react-commons-collection/?path=/story/media-radiobutton--radio-button-story)
```javascript
  import { RadioButton } from '@react-pakistan/react-commons-collection';

  <RadioButton
    checked
    tag="Label"
  />
```

- [RadioButtonWithLabel](https://taimoormk.github.io/react-commons-collection/?path=/story/input-radiobutton--radio-button-with-label-story)
```javascript
  import { RadioButton } from '@react-pakistan/react-commons-collection';

  <withFieldLabel(Component)
    checked
    helperText="There is an error"
    helperTextColor="#F62F5E"
    label="Pick one"
    tag="Label"
  />
```

- [RowContainer](https://taimoormk.github.io/react-commons-collection/?path=/story/layout-rowcontainer--row-container-story)
```javascript
  import { RowContainer } from '@react-pakistan/react-commons-collection';

  <RowContainer
    alignItems="center"
    desktop="display: flex;"
    justifyContent="center"
    laptop="display: flex;"
    laptopL="display: flex;"
    mobileL="display: flex;"
    mobileM="display: flex;"
    mobileS="display: flex;"
    tablet="display: flex;"
  >
    RowContainer Component
  </RowContainer>
```

- [Select](https://taimoormk.github.io/react-commons-collection/?path=/story/input-select--select-story)
```javascript
  import { Select } from '@react-pakistan/react-commons-collection';

  <Select
    form="form_id"
    name="dropDownName"
    size={0}
  >
    <Option
      value="volvo"
    >
      Volvo
    </Option>
    <Option
      disabled
      value="saab"
    >
      Saab
    </Option>
    <Option
      value="mercedes"
    >
      Mercedes
    </Option>
    <Option
      value="audi"
    >
      Audi
    </Option>
  </Select>
```

- [SelectWithLabel](https://taimoormk.github.io/react-commons-collection/?path=/story/input-select--select-with-label-story)
```javascript
  import { Select } from '@react-pakistan/react-commons-collection';

  <withFieldLabel(styled.select)
    form="form_id"
    helperText="There is an error"
    helperTextColor="#F62F5E"
    label="Email"
    name="dropDownName"
    size={0}
  >
    <Option
      value="volvo"
    >
      Volvo
    </Option>
    <Option
      disabled
      value="saab"
    >
      Saab
    </Option>
    <Option
      value="mercedes"
    >
      Mercedes
    </Option>
    <Option
      value="audi"
    >
      Audi
    </Option>
  </withFieldLabel(styled.select)>
```

- [Spacer](https://taimoormk.github.io/react-commons-collection/?path=/story/layout-spacer--spacer-story)
```javascript
  import { Spacer } from '@react-pakistan/react-commons-collection';

  <Spacer
    margin="1em 1em 1em 1em"
    padding="0em 0em 0em 0em"
  />
```

-[SocialShare](https://taimoormk.github.io/react-commons-collection/?path=/story/misc-socialshare--social-share-story)
```javascript
  import { Spacer } from '@react-pakistan/react-commons-collection';

  <SocialShare
    socialIcons={[
      {
        borderRadius: '50%',
        id: 'social-icon-1',
        round: true,
        serviceName: 'facebook',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-2',
        round: true,
        serviceName: 'twitter',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-3',
        round: true,
        serviceName: 'telegram',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-4',
        round: true,
        serviceName: 'whatsapp',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-5',
        round: true,
        serviceName: 'linkedin',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-6',
        round: true,
        serviceName: 'pinterest',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-7',
        round: true,
        serviceName: 'vk',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-8',
        round: true,
        serviceName: 'ok',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-9',
        round: true,
        serviceName: 'reddit',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-10',
        round: true,
        serviceName: 'tumblr',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-11',
        round: true,
        serviceName: 'livejournal',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-12',
        round: true,
        serviceName: 'mailru',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-13',
        round: true,
        serviceName: 'viber',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-14',
        round: true,
        serviceName: 'workplace',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-15',
        round: true,
        serviceName: 'line',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-16',
        round: true,
        serviceName: 'pocket',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-17',
        round: true,
        serviceName: 'instapaper',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-18',
        round: true,
        serviceName: 'email',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      }
    ]}
  />
```

- [Table](https://taimoormk.github.io/react-commons-collection/?path=/story/misc-table--table-story)
```javascript
  import { Table } from '@react-pakistan/react-commons-collection';

  <Table>
    <Thead>
      <Tr>
        <Td>
          Hey header
        </Td>
        <Td>
          Hello header
        </Td>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
          Hey body
        </Td>
        <Td>
          Hello body
        </Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Td>
          Hey foot
        </Td>
        <Td>
          Hello foot
        </Td>
      </Tr>
    </Tfoot>
  </Table>
```

- [TextArea](https://taimoormk.github.io/react-commons-collection/?path=/story/misc-textarea--text-area-story)
```javascript
  import { TextArea } from '@react-pakistan/react-commons-collection';

  <State
    initial={{
      value: ''
    }}
  />
```

- [TextAreaWithLabel](https://taimoormk.github.io/react-commons-collection/?path=/story/misc-textarea--text-area-with-label-story)
```javascript
  import { TextArea } from '@react-pakistan/react-commons-collection';

  <State
    initial={{
      value: ''
    }}
  />
```

- [Text](https://taimoormk.github.io/react-commons-collection/?path=/story/misc-text--text-story)
```javascript
  import { Text } from '@react-pakistan/react-commons-collection';

  <Text
    color="#2E2E2E"
    desktop=""
    fontFamily="Montserrat"
    fontSize="1em"
    fontWeight={400}
    laptop=""
    laptopL=""
    letterSpacing="normal"
    lineHeight="normal"
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    textAlign="left"
    textTransform="none"
  >
    Text Component
  </Text>
```

- [Ul](https://taimoormk.github.io/react-commons-collection/?path=/story/misc-ul--ul-story)
```javascript
  import { Ul } from '@react-pakistan/react-commons-collection';

  <Ul
    desktop=""
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    type="default"
  />
```

- [Video](https://taimoormk.github.io/react-commons-collection/?path=/story/media-video--video-story)
```javascript
  import { Video } from '@react-pakistan/react-commons-collection';

  <Video
    autoplay
    controls
    desktop=""
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    poster="https://upload.wikimedia.org/wikipedia/commons/b/b9/Elephants_Dream_s8_proog.jpg"
    preload="auto"
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    tablet=""
    width="100%"
  />
```

- [Wrapper](https://taimoormk.github.io/react-commons-collection/?path=/story/layout-wrapper--wrapper-story)
```javascript
  import { Wrapper } from '@react-pakistan/react-commons-collection';

  <Wrapper
    desktop=""
    laptop=""
    laptopL=""
    mobileL=""
    mobileM=""
    mobileS=""
    tablet=""
    width="90%"
  >
    Wrapper Component
  </Wrapper>
```

# Other Libraries from ReactPakistan
<div>
  <a
    href="https://taimoormk.github.io/react-commons-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React Commons Collection"
      src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1566265693/GitHub/react-commons-collection.jpg"
      width="70%"
    />
  </a>
  <a
    href="https://www.npmjs.com/package/@react-pakistan/react-commons-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React Commons Collection - NPM Package"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-"
      width="20%"
    />
  </a>
</div>
<div>
  <a
    href="https://taimoormk.github.io/react-ui-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React UI Collection"
      src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1566265693/GitHub/react-ui-collection.jpg"
      width="70%"
    />
  </a>
  <a
    href="https://www.npmjs.com/package/@react-pakistan/react-ui-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React UI Collection - NPM Package"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-"
      width="20%"
    />
  </a>
</div>
<div>
  <a
    href="https://taimoormk.github.io/react-icon-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React Icon Collection"
      src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499955/GitHub/react-icons-collection.jpg"
      width="70%"
    />
  </a>
  <a
    href="https://www.npmjs.com/package/@react-pakistan/react-icon-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React Icon Collection - NPM Package"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-"
      width="20%"
    />
  </a>
</div>
<div>
  <a
    href="https://taimoormk.github.io/react-logo-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React Logo Collection"
      src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499957/GitHub/react-logo-collection.jpg"
      width="70%"
    />
  </a>
  <a
    href="https://www.npmjs.com/package/@react-pakistan/react-icon-collection"
    target="_blank"
  >
    <img
      alt="React Pakistan - React Logo Collection - NPM Package"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-"
      width="20%"
    />
  </a>
</div>

## Buy me a coffee
<div>
  <a
    href="https://www.buymeacoffee.com/60whp8FM3"
    target="_blank"
  >
    <img
      alt="Buy Me A Coffee"
      src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/yellow_img.png"
      style="height: auto !important;width: auto !important;" />
  </a>
</div>
