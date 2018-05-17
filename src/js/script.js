function getData(divId,dataSource)
{
  var fileData = new XMLHttpRequest();
  fileData.open('GET',dataSource,false);
  fileData.onreadystatechange = function()
  {
    if(fileData.readyState === 4)
    {
      if(fileData.status === 200 || fileData.status === 0)
      {
        var allText = fileData.responseText;
        var c = allText.indexOf('*');
        $(document).ready()
        {
          document.title=allText.substring(0,c);
        }
        $(divId).html(allText.substring(c+1));
      }
    }
  }
  fileData.send(null);
}

$('#principal-message-link').click(function()
{
  getData('#main-div','principal.txt');
});
