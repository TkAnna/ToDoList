'use strict';

function Table(groupIndex) {

    let parent = $('<div/>', {
        class: 'card',
        'data-index': groupIndex
    }).appendTo('#accordion');

    this.addGroup = function (title, index) {

        // this.parent.attr('data-index', index);
        let headerID = 'header-' + index;
        let collapseID = 'collapse-' + index;

        let newGroup = new GroupOfTasks(title,index);
        newGroup.getGroupHeaderElement(headerID, collapseID, parent);
        newGroup.getGroupCollapseElement(headerID, collapseID, parent);
    };


}
