'use strict';

function GroupOfTasks(gTitle) {
    this.groupTitle = gTitle;
    this.tasks = [];

    let self = this;

    this.getGroupHeaderElement = function (headerID, collapseID, parent) {

        $('<div/>', {
            class: 'card-header d-flex justify-content-between',
            id: headerID,
            html: '<button class="btn btn-link" ' +
            'type="button" ' +
            'data-toggle="collapse" ' +
            'data-target="#' + collapseID + '" ' +
            'aria-expanded="false" ' +
            'aria-controls="' + collapseID + '">' + this.groupTitle + '</button>' +
            '<div><button class="btn btn-outline-secondary addTaskBtn" type="button">Add task</button>' +
            '<button class="btn btn-outline-secondary ml-1 deleteGroupBtn" type="button">Delete group</button></div>'

        }).appendTo(parent);
    };

    this.getGroupCollapseElement = function (headerID, collapseID, parent) {
        let collapseParent = $('<div/>',{
            class: 'collapse',
            id: collapseID,
            'aria-labelledby': headerID,
            'data-parent': '#accordion'
        }).appendTo(parent);

        $('<div/>',{
            class: 'card-body',
            html: '<ul class="list-group"></ul>'
        }).appendTo(collapseParent);
    };
}
