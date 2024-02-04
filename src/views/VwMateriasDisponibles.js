/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {style_01} from '../styles/styles_courses';
import { materiaSeleccionada } from '../components/actions/materiasAction';


const VmMateriasDisponibles = ({materias}) => {
    const dispatch = useDispatch();
    const onPressSubject = materia => {
        dispatch(materiaSeleccionada(materia));
    };

    return (
       <View>
            <Text style={style_01.title}>Materias Disponibles</Text>
            {materias.materiasDisponibles.map((materia ,index) => (
                <TouchableOpacity
                key={index}
                style={style_01.list1}
                onPress={() => onPressSubject(materia)}>
                <Text>Agregar {materia}</Text>
                </TouchableOpacity>
            ))}
       </View>
    );
};

const mapStateToProps = ({materias}) => {
    return {materias};
};

export default connect(mapStateToProps)(VmMateriasDisponibles);
