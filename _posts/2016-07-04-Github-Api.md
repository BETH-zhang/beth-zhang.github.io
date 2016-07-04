---
layout: post
---

> github的api，来收藏一下吧

<div id="github-api"></div>

<script type="text/javascript" src="{{ "/js/H5ComponentBase.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript" src="{{ "/js/H5ComponentJsonObject.js" | prepend: site.baseurl }}"></script>

<script type="text/javascript">
    $.ajax({
        url: 'https://api.github.com/',
        type: 'get',
        success: function(res){

            var apiOject = new H5ComponentJsonObject('api', {
                type: 'githubapi',
                text: '通过遍历所有的api对象，获取的内容如下（https://api.github.com/）：',
                data: res
            });

            $('#github-api').append(apiOject);
        }
    });
</script>

### https://developer.github.com/v3/#hypermedia