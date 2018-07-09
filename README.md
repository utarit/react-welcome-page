
# REACT WELCOME PAGE

  

Simple beautiful welcome screen for your React and React Native apps.
https://github.com/utarit/react-welcome-page

  

## Example

### React Web App

![Example Screen](https://i.imgur.com/NfzYzz5.gif)


```
<Welcome
data={
		[
			{
			"backgroundColor": "rgb(73, 49, 91)",
			"textColor": "#EE79EA",
			"imageAnimation": "flipInX",
			"image": require('./images/1.png')
			},
			{
			"backgroundColor": "rgb(252, 187, 19)",
			"textColor": "#754600",
			"text": "My App",
			"imageAnimation": "slideInUp",
			"textAnimation": "slideInLeft",
			"image": require('./images/2.png')
			},
			{
			"backgroundColor": "rgb(156, 196, 76)",
			"textColor": "#344115",
			"text": "Green Elephant",
			"image": require('./images/3.png')
			},
			{
			"backgroundColor": "rgb(4, 116, 188)",
			"textColor": "#FFFFFF",
			"text": "Save the World",
			"textAnimation": "fadeInUp",
			"image": require('./images/4.png')
			}
		]
}
/>

```
## Smart Color Picking Tool

  

To ease your work, you can use this tool to generate your <Welcome ... /> component easily.

https://utarit.github.io/react-welcome-page-color-form/
  

### Installing

```
npm install --save react-welcome-page
```

  

### Using

  

```
import Welcome from 'react-welcome-page'

...
  

render(){

return(
<div id='my-container'>
<Welcome
		loopDuration={1100}
		data={[
		{
		image: require('./image_path/mypic1.png),
		text: 'My Quote',
		imageAnimation: 'flipInX',
		textAnimation: 'bounce',
		backgroundColor: '#FF3354',
		textColor: '#002134'
		},
		{
		image: require('./image_path/mypic2.png),
		text: 'My Quote',
		},
		{
		image: require('./image_path/mypic3.png),
		textAnimation: 'rotateIn'
		}
	]}

/>

...Rest of the app

  
</div>
)}

```

### Table of Contents


| Prop | Requirement | Default| Type
|--|--|--|--|
| loopDuration | not required | 1000 (ms) | number
|image | **required** | - | require('path of image') or 'http:// imageurl.png' (I suggest using a local image)
|text|not required | '' | string
|imageAnimation |not required | 'rotateIn' | string* (Only Web)
|textAnimation |not required | 'fadeInDown' | string* (Only Web)
|backgroundColor|not required| 'whitesmoke' | string as HEX '#123456' or RGB 'rgb(219, 123, 97)'
|textColor|not required| 'whitesmoke' | string as HEX '#123456' or RGB 'rgb(219, 123, 97)'

  

**Animations taken from animate.css (https://daneden.github.io/animate.css/), you can only use these animations.*

**In React Native, you do not have animation options*
