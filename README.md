# myComponents

Trailhead Component - Inside this folder there is a little project using custom-tag HTML5 , I-ve created a component called <course-trail> to be used as a element inside a page. This element is a box similar to the trails of trailhead (https://trailhead.salesforce.com/trails)


<table>
  <tr><td colspan="2">course-trail</td></tr>
  <tr><td>hover</td><td>onmouseover behavior</td></tr>
  <tr><td>boxColor</td><td>Box's head color</td></tr>
  <tr><td>logoImgHref</td><td>Link of image, this is used in the head part</td></tr>
  <tr><td>progress-amount</td><td>There's a progress bar in the head part of the box, this amount (e.g 45%) will be appear as a text on the left side of progress bar</td></tr>
  <tr><td>progress-remaining</td><td>How much time is left to complete this trail</td></tr>
  <tr><td>progress-time-text</td><td>Total of trails for this module</td></tr>
  <tr><td>trail-title</td><td>Trail title, this one will appear in the body of the box</td></tr>
  <tr><td>trail-module-link</td><td>Trail link to redirect to another page</td></tr>
  <tr><td>module-description</td><td>Trail description</td></tr>
  <tr><td>module-tags</td><td>Bottom part</td></tr>
  
</table>

Example : 

```
<course-trail
    hover="Mouse hover behavior"
    boxColor='green'
    logoImgHref="https://developer.salesforce.com/resource/images/trailhead/trails/trailhead_trail_analytics.png"
    progress-amount="45%"
    progress-remaining="1 hora"
    progress-time-text="4 módulos"
    trail-title="Title"
    trail-module-link=""
    module-description="ononononono obobobo obobob o bob bo
      ononononono obobobo obobob o bob bo ononononono obobobo
      obobob o bob bo ononononono obobobo obobob o bob
       bo ononononono obobobo obobob o bob bo
       ononononono obobobo obobob o bob bo
       ononononono obobobo obobob o bob bo
       ononononono obobobo obobob o bob bo "
    module-tags="Tags | Tags | Tags"
</course-trail>
```
