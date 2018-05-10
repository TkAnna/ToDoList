'use strict';

$(document).ready(function () {


    let groupIndex = 0;
    let taskParent;

    $('#saveGroupTitle').on('click', function () {

        let groupTitle = $('#groupTitle').val();

        if (groupTitle) {

            let newTable = new Table(groupIndex);
            newTable.addGroup(groupTitle, groupIndex);

            groupIndex++;

            $('#groupFormModal').modal('hide');
            $('#groupTitle').val('');
        }

    });

    $('#accordion').on('click','.deleteGroupBtn', event => {
        event.target.closest('.card').remove();
    });


    $('#accordion').on('click', '.addTaskBtn', function (e) {
        clearTaskForm();
        let parentGroup = e.target.parentNode.parentNode.parentNode;
        let dataIndex = parentGroup.getAttribute('data-index');
        taskParent = $('div.card[data-index = ' + dataIndex + '] .collapse .card-body ul');

        $('#taskFormModal').modal('show');

        $('#saveTask').on('click', [taskParent], function (e) {

            e.stopImmediatePropagation();
            let taskContent = $('#taskContent').val();
            let taskStatus = $('#taskStatus').val();
            let taskPriority = $('input[name="taskPriority"]:checked').val();

            if (taskContent) {
                let newTask = new Task(taskContent, taskStatus, taskPriority);
                newTask.getTask(taskParent);

                $('#taskFormModal').modal('hide');
            }

        });

    });

    $('#accordion').on('click', '.deleteTaskBtn', event => {
        event.target.closest('li').remove();
    });


});
