import $ from 'jquery';

$(function () {
    $('#toggle-two').bootstrapToggle({
      on: 'Admin',
      off: 'Student'
    });
  })
function Toggle() {
  return (
    <>
      <input type="checkbox" data-toggle="toggle" data-on="Enabled" data-off="Disabled"/>
      <input type="checkbox" id="toggle-two"/>
    </>
  )
}
export default Toggle; 