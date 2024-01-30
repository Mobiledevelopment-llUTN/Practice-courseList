/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {style_01} from '../styles/styles_courses';
import { deleteTaskAction} from '../components/actions/TaskAction';

const TaskList = ({Tasks}) => {
    const dispatch = useDispatch();
    const onPressTask = taskDescription => {
        dispatch(deleteTaskAction(taskDescription));
    };

    return (
        <View style={style_01.list2}>
            <Text style={style_01.titleSections}>Cursos Matriculados</Text>
            <View style={style_01.body}>
                {Tasks.todoTasks.map((task, index) => (
                    <TouchableOpacity
                        key={index}
                        style={style_01.taskText}
                        onPress={() => onPressTask(task)}>
                        <Text style={style_01.text}>{task}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const mapStateToProps = ({Tasks}) => {
    return {Tasks};
};

export default connect(mapStateToProps)(TaskList);