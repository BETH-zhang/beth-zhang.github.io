---
layout: post
---

移步：[命令（Command）和 API 的差别](https://github.com/fex-team/kityminder-core/wiki/command#appendchildnode)

# 命令列表

<div id="kityMinderCommand"></div>

<script type="text/javascript" src="{{ "/js/H5ComponentBase.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript" src="{{ "/js/is.js" | prepend: site.vaseurl }}"></script>
<script type="text/javascript" src="{{ "/js/mini_markdown.js" | prepend: site.vaseurl }}"></script>
<script type="text/javascript" src="{{ "/js/H5ComponentkityMinderCommand.js" | prepend: site.baseurl }}"></script>

<script type="text/javascript">
    var data = {
        AppendChildNode: {
            intro: "添加子节点到选中的节点中",
            command: "minder.execCommand('AppendChildNode', textOrData);",
            params: [{
                param: 'textOrData',
                type: 'string|object',
                intro: '要插入的节点的文本或数据'
            }],
            state: {
                get: "var state = minder.queryCommandState('AppendChildNode');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        AppendSiblingNode: {
            intro: "添加选中的节点的兄弟节点",
            command: "minder.execCommand('AppendSiblingNode', textOrData);",
            params: [{
                param: 'textOrData',
                type: 'string|object',
                intro: '要添加的节点的文本或数据'
            }],
            state: {
                get: "var state = minder.queryCommandState('AppendSiblingNode');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        Arrange: {
            intro: "调整选中节点的位置",
            command: "minder.execCommand('Arrange', index);",
            params: [{
                param: 'index',
                type: 'number',
                intro: '调整后节点的新位置'
            }],
            state: {
                get: "var state = minder.queryCommandState('Arrange');",
                value: {
                    0: '当前选中了具有相同父亲的节点',
                    '-1': '其它情况'
                }
            }
        },
        ArrangeDown: {
            intro: "向下调整选中节点的位置",
            keyCode: 'Alt + Down',
            command: "minder.execCommand('ArrangeDown');",
            state: {
                get: "var state = minder.queryCommandState('ArrangeDown');",
                value: {
                    0: '当前选中了具有相同父亲的节点',
                    '-1': '其它情况'
                }
            }
        },
        ArrangeUp: {
            intro: "向上调整选中节点的位置",
            keyCode: 'Alt + Up',
            command: "minder.execCommand('ArrangeUp');",
            state: {
                get: "var state = minder.queryCommandState('ArrangeUp');",
                value: {
                    0: '当前选中了具有相同父亲的节点',
                    '-1': '其它情况'
                }
            }
        },
        Background: {
            intro: "设置选中节点的背景颜色",
            command: "minder.execCommand('Background', color);",
            params: [{
                param: 'color',
                type: 'string',
                intro: '表示颜色的字符串'
            }],
            state: {
                get: "var state = minder.queryCommandState('Background');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            },
            returnValue: "var value = minder.queryCommandValue('Background');",
            tips: "如果只有一个节点选中，返回已选中节点的背景颜色；否则返回 'mixed'"
        },
        Bold: {
            intro: "加粗选中的节点",
            keyCode: 'Ctrl + B',
            command: "minder.execCommand('Bold');",
            state: {
                get: "var state = minder.queryCommandState('Bold');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点',
                    1: '当前已选中的节点已加粗'
                }
            }
        },
        Camera: {
            intro: "设置当前视野的中心位置到某个节点上",
            command: "minder.execCommand('Camera', focusNode, duration);",
            params: [{
                param: 'focusNode',
                type: 'kityminder.MinderNode',
                intro: '要定位的节点'
            },{
                param: 'duration',
                type: 'number',
                intro: '设置视野移动的动画时长（单位 ms），设置为 0 不使用动画'
            }],
            state: {
                get: "var state = minder.queryCommandState('Camera');",
                value: {
                    0: '始终可用',
                }
            }
        },
        ClearStyle: {
            intro: "移除选中节点的样式，包括字体、字号、粗体、斜体、背景色、字体色",
            command: "minder.execCommand('ClearStyle');",
            state: {
                get: "var state = minder.queryCommandState('ClearStyle');",
                value: {
                    0: '当前有选中的节点，并且至少有一个设置了至少一种样式',
                    '-1': '其它情况'
                }
            }
        },
        Copy: {
            intro: "复制当前选中的节点",
            keyCode: 'Ctrl + C',
            command: "minder.execCommand('Copy');",
            state: {
                get: "var state = minder.queryCommandState('Copy');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        CopyStyle: {
            intro: "拷贝选中节点的当前样式，包括字体、字号、粗体、斜体、背景色、字体色",
            command: "minder.execCommand('CopyStyle');",
            state: {
                get: "var state = minder.queryCommandState('CopyStyle');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        Cut: {
            intro: "剪切当前选中的节点",
            keyCode: 'Ctrl + X',
            command: "minder.execCommand('Cut');",
            state: {
                get: "var state = minder.queryCommandState('Cut');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        EditNode: {
            intro: "编辑选中的节点",
            command: "minder.execCommand('EditNode');",
            state: {
                get: "var state = minder.queryCommandState('EditNode');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        Expand: {
            intro: "展开当前选中的节点，保证其可见",
            command: "minder.execCommand('Expand', justParents);",
            params: [{
                param: 'justParents',
                type: 'bool',
                intro: '是否只展开到父亲<br/>* false - （默认）保证选中的节点以及其子树可见<br/>* true - 只保证选中的节点可见，不展开其子树'
            }],            
            state: {
                get: "var state = minder.queryCommandState('Expand');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        ExpandToLevel: {
            intro: "展开脑图到指定的层级",
            command: "minder.execCommand('ExpandToLevel', level);",
            params: [{
                param: 'level',
                type: 'number',
                intro: '指定展开到的层级，最少值为 1。'
            }],            
            state: {
                get: "var state = minder.queryCommandState('ExpandToLevel');",
                value: {
                    0: '一直可用'
                }
            }
        },
        FontFamily: {
            intro: "设置选中节点的字体",
            command: "minder.execCommand('FontFamily', family);",
            params: [{
                param: 'family',
                type: 'string',
                intro: '表示字体的字符串'
            }],            
            state: {
                get: "var state = minder.queryCommandState('FontFamily');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            },
            returnValue: "var value = minder.queryCommandValue('FontFamily');",
            tips: '返回首个选中节点的字体'
        },
        FontSize: {
            intro: "设置选中节点的字体大小",
            command: "minder.execCommand('FontSize', size);",
            params: [{
                param: 'size',
                type: 'number',
                intro: '字体大小（px）'
            }],            
            state: {
                get: "var state = minder.queryCommandState('FontSize');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            },
            returnValue: "var value = minder.queryCommandValue('FontSize');",
            tips: '返回首个选中节点的字体大小'
        },
        ForeColor: {
            intro: "设置选中节点的字体颜色",
            command: "minder.execCommand('ForeColor', color);",
            params: [{
                param: 'color',
                type: 'string',
                intro: '表示颜色的字符串'
            }],            
            state: {
                get: "var state = minder.queryCommandState('ForeColor');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            },
            returnValue: "var value = minder.queryCommandValue('ForeColor');",
            tips: "如果只有一个节点选中，返回已选中节点的字体颜色；否则返回 'mixed'。"
        },
        Hand: {
            intro: "切换抓手状态，抓手状态下，鼠标拖动将拖动视野，而不是创建选区",
            command: "minder.execCommand('Hand');",
            state: {
                get: "var state = minder.queryCommandState('Hand');",
                value: {
                    0: '当前不是抓手状态',
                    1: '当前是抓手状态'
                }
            }
        },
        HyperLink: {
            intro: "为选中的节点添加超链接",
            command: "minder.execCommand('HyperLink', url, title);",
            params: [{
                param: 'url',
                type: 'string',
                intro: '超链接的 URL，设置为 null 移除'
            },{
                param: 'title',
                type: 'string',
                intro: '超链接的说明'
            }],            
            state: {
                get: "var state = minder.queryCommandState('HyperLink');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            },
            returnValue: "var value = minder.queryCommandValue('HyperLink');",
            tips: "返回首个选中节点的超链接信息，JSON 对象： {url: url, title: title}"
        },
        Image: {
            intro: "为选中的节点添加图片",
            command: "minder.execCommand('Image', url, title);",
            params: [{
                param: 'url',
                type: 'string',
                intro: "图片的 URL，设置为空字符串 '' 为移除图片"
            },{
                param: 'title',
                type: 'string',
                intro: '图片的说明'
            }],            
            state: {
                get: "var state = minder.queryCommandState('Image');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            },
            returnValue: "var value = minder.queryCommandValue('Image');",
            tips: "返回首个选中节点的图片信息，JSON 对象： {url: url, title: title}"
        },
        Italic: {
            intro: "加斜选中的节点",
            keyCode: 'Ctrl + I',
            command: "minder.execCommand('Italic');",
            state: {
                get: "var state = minder.queryCommandState('Italic');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点',
                    1: '当前已选中的节点已加斜'
                }
            },
            returnValue: "var value = minder.queryCommandValue('Image');",
            tips: "返回首个选中节点的图片信息，JSON 对象： {url: url, title: title}"
        },
        Layout: {
            intro: "设置选中节点的布局<br>允许使用的布局可以使用 kityminder.Minder.getLayoutList() ",
            command: "minder.execCommand('Layout', name);",
            params: [{
                param: 'name',
                type: 'string',
                intro: '布局的名称，设置为 null 则使用继承或默认的布局'
            }],            
            state: {
                get: "var state = minder.queryCommandState('Layout');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            },
            returnValue: "var value = minder.queryCommandValue('Layout');",
            tips: "返回首个选中节点的布局名称"
        },
        Move: {
            intro: "指定方向移动当前视野",
            command: "minder.execCommand('Move', dir, duration);",
            params: [{
                param: 'dir',
                type: 'string',
                intro: "移动方向<br/>取值为 'left'，视野向左移动一半<br/>取值为 'right'，视野向右移动一半</br>取值为 'up'，视野向上移动一半</br>取值为 'down'，视野向下移动一半"
            },{
                param: 'duration',
                type: 'number',
                intro: '视野移动的动画时长（单位 ms），设置为 0 不使用动画'
            }],            
            state: {
                get: "var state = minder.queryCommandState('Move');",
                value: {
                    0: '始终可用'
                }
            }
        },
        Note: {
            intro: "设置节点的备注信息",
            command: "minder.execCommand('Note', note);",
            params: [{
                param: 'note',
                type: 'string',
                intro: "要设置的备注信息，设置为 null 则移除备注信息"
            }],            
            state: {
                get: "var state = minder.queryCommandState('Note');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        Paste: {
            intro: "粘贴已复制的节点到每一个当前选中的节点上",
            keyCode: 'Ctrl + V',
            command: "minder.execCommand('Paste');",
            state: {
                get: "var state = minder.queryCommandState('Paste');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        PasteStyle: {
            intro: "粘贴已拷贝的样式到选中的节点上，包括字体、字号、粗体、斜体、背景色、字体色",
            command: "minder.execCommand('PasteStyle');",
            state: {
                get: "var state = minder.queryCommandState('PasteStyle');",
                value: {
                    0: '当前有选中的节点, 并且已经有复制的样式',
                    '-1': '当前没有选中的节点, 或者没有复制的样式'
                }
            }
        },
        Priority: {
            intro: "设置节点的优先级信息",
            command: "minder.execCommand('Priority', value);",
            params: [{
                param: 'value',
                type: 'number',
                intro: '要设置的优先级（添加一个优先级小图标）<br/>取值为 0 移除优先级信息；<br/>取值为 1 - 9 设置优先级，超过 9 的优先级不渲染'
            }],
            state: {
                get: "var state = minder.queryCommandState('Priority');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        Progress: {
            intro: "设置节点的进度信息（添加一个进度小图标）",
            command: "minder.execCommand('Progress', value);",
            params: [{
                param: 'value',
                type: 'number',
                intro: '要设置的进度<br/>取值为 0 移除进度信息；</br>取值为 1 表示未开始；<br/>取值为 2 表示完成 1/8；<br/>取值为 3 表示完成 2/8；<br/>取值为 4 表示完成 3/8；<br/>其余类推，取值为 9 表示全部完成'
            }],
            state: {
                get: "var state = minder.queryCommandState('Progress');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        RemoveNode: {
            intro: "移除选中的节点",
            command: "minder.execCommand('RemoveNode');",
            state: {
                get: "var state = minder.queryCommandState('RemoveNode');",
                value: {
                    0: '当前有选中的节点',
                    '-1': '当前没有选中的节点'
                }
            }
        },
        ResetLayout: {
            intro: "重设选中节点的布局，如果当前没有选中的节点，重设整个脑图的布局",
            command: "minder.execCommand('ResetLayout');",
            state: {
                get: "var state = minder.queryCommandState('ResetLayout');",
                value: {
                    0: '始终可用'
                }
            },
            returnValue: "var value = minder.queryCommandValue('ResetLayout');",
            tips: '返回首个选中节点的布局名称'
        },
        Resource: {
            intro: "设置节点的资源标签",
            command: "minder.execCommand('Resource', resource);",
            params: [{
                param: 'resource',
                type: 'Array<string>',
                intro: '要设置的资源列表，设置为空清除节点的资源标签'
            }],
            returnValue: "var value = minder.queryCommandValue('Resource');",
            tips: '返回当前选中节点中包含的资源（数组）'
        },
        Template: {
            intro: "设置当前脑图的模板",
            command: "minder.execCommand('Template', name);",
            params: [{
                param: 'name',
                type: 'string',
                intro: '模板名称<br/>允许使用的模板可以使用 kityminder.Minder.getTemplateList() 查询'
            }],
            state: {
                get: "var state = minder.queryCommandState('Template');",
                value: {
                    0: '始终可用'
                }
            },
            returnValue: "var value = minder.queryCommandValue('Template');",
            tips: '返回当前的模板名称'
        },
        Theme: {
            intro: "设置当前脑图的主题",
            command: "minder.execCommand('Theme', name);",
            params: [{
                param: 'name',
                type: 'string',
                intro: '主题名称<br/>允许使用的主题可以使用 kityminder.Minder.getThemeList() 查询'
            }],
            state: {
                get: "var state = minder.queryCommandState('Theme');",
                value: {
                    0: '始终可用'
                }
            },
            returnValue: "var value = minder.queryCommandValue('Theme');",
            tips: '返回当前的主题名称'
        },
        Zoom: {
            intro: "缩放当前的视野到一定的比例（百分比）",
            command: "minder.execCommand('Zoom', value);",
            params: [{
                param: 'value',
                type: 'number',
                intro: '设置的比例，取值 100 则为原尺寸'
            }],
            state: {
                get: "var state = minder.queryCommandState('Zoom');",
                value: {
                    0: '始终可用'
                }
            }
        },
        ZoomIn: {
            intro: "放大当前的视野到下一个比例等级（百分比）",
            keyCode: '=',
            command: "minder.execCommand('ZoomIn');",
            state: {
                get: "var state = minder.queryCommandState('ZoomIn');",
                value: {
                    0: '如果当前脑图的配置中还有下一个比例等级',
                    '-1': '其它情况'
                }
            }
        },
        ZoomOut: {
            intro: "缩小当前的视野到上一个比例等级（百分比）",
            keyCode: '-',
            command: "minder.execCommand('ZoomOut');",
            state: {
                get: "var state = minder.queryCommandState('ZoomOut');",
                value: {
                    0: '如果当前脑图的配置中还有上一个比例等级',
                    '-1': '其它情况'
                }
            }
        }
    };
    var kityMinderCommand = new H5ComponentkityMinderCommand('my', {
        type: 'kityMinderCommand',
        data: data
    });

    $('#kityMinderCommand').append(kityMinderCommand);
</script>