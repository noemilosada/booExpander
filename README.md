**booExpander jQuery plugin**
==============================
------------------------------

Expander more or less information.

**HTML Structure**

```html
<div class="boo-expander">
  <div class="boo-expander-content">
      This is an information block.
  </div>

  <a href="#" title="Show more" data-boo-show="more">Show more</a>
  <a href="#" title="Show less" data-boo-show="less">Show less</a>
</div>
```

**Plugin Usage**

```javascript
$('.boo-expander').booExpander({
    speed: 400,
    state: 0
});
```

**Options**

```speed:``` 200 / 400 / 600 / 'slow' / 'fast'   
This will be the speed to show and hide the information.   
The default option is 200.
   
```state:``` 0 / 1
To make visible the content by default put the value 1.
The default option is 0 (hide content information).   
   
```element:``` 'a' / 'button'
This define the clicked tag.
By default is a link tag.
