/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {style_01} from '../styles/styles_courses';

import {useState} from 'react';
import {addTaskAction} from '../components/actions/TaskAction';

const TaskRegister = () => {
    const [txtTask, setTxtTask] = useState('');

    const courses = [
        {
            Nombre: 'Fundamentos de Progra',
        },
        {
            Nombre: 'Administracion de Base de Datos',
        },
        {
            Nombre: 'Programacion II',
        },
    ];

    const dispatch = useDispatch();
    const onPressTask = taskDescription => {
        dispatch(addTaskAction(txtTask));
        setTxtTask('');
    };

    return (
        <View>
            <View style={style_01.titleBar}>
                <Text style={style_01.title}>Course List</Text>
            </View>
            <View style={style_01.row}>
                <View style={style_01.list1}>
                    <Text style={style_01.titleSections}>Cursos Ofertados</Text>
                    {courses.map(item =>
                    <TouchableOpacity key={item.Nombre}  style={style_01.taskText} onPress={() => onPressTask(item.Nombre)}>
                    <Text style={style_01.text}>{item.Nombre}</Text>
                    </TouchableOpacity>)}
                </View>
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        Tasks: state.Tasks,
    };
};

export default connect(mapStateToProps)(TaskRegister);

