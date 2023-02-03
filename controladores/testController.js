app.controller('testController', ['$scope', '$http', '$location','$localStorage','$timeout',  function ($scope,$http,$location,myProvider,$localStorage,$timeout) {

    $scope.terminar=function(){

        $('#bt').prop('disabled', true);
        $('#1').prop('disabled', true);
       // $scope.navegacion ("/testForm");
       $scope.datosTestFormTotal = JSON.parse(window.localStorage.getItem('datosTestForm'))
       console.log($scope.datosTestFormTotal);
       $scope.registrarDatosTest();

        $scope.respuestas = [];
        for (i=0; i < $scope.allPreguntas.length ; i++)
        {
                $scope.respuestas.push({
                    cod: $scope.allPreguntas[i].ID_PREGUNTA,
                    resp: parseInt($('#'+$scope.allPreguntas[i].ID_PREGUNTA).val())
                });
        }

        $scope.matriz = [6,10];
        $scope.arrayCaracteristicas = ["Dinamismo","Dominancia","Cooperación/Empatía","Cordialidad/Amabilidad",
            "Escrupulosidad","Perseverancia","Control de emociones","Control de impulsos","Apertura a la cultura",
            "Apertura a la experiencia","Distorsión"];
        $scope.Dinamismo = [];
        $scope.Dominancia = [];
        $scope.Cooperacion_Empatia = [];
        $scope.Cordialidad_Amabilidad = [];
        $scope.Escrupulosidad = [];
        $scope.Perseverancia = [];
        $scope.Control_de_emociones = [];
        $scope.Control_de_impulsos = [];
        $scope.Apertura_a_la_cultura = [];
        $scope.Apertura_a_la_experiencia = [];
        $scope.Distorsion = [];
        //DINAMISMO
        $scope.Dinamismo.push("Dinamismo");
        $scope.Dinamismo.push($scope.respuestas[0].resp + $scope.respuestas[24].resp + $scope.respuestas[52].resp +
            $scope.respuestas[67].resp + $scope.respuestas[93].resp + $scope.respuestas[113].resp );
        $scope.Dinamismo.push($scope.respuestas[6].resp + $scope.respuestas[36].resp + $scope.respuestas[50].resp +
            $scope.respuestas[77].resp + $scope.respuestas[98].resp + $scope.respuestas[120].resp );
        $scope.Dinamismo.push($scope.Dinamismo[1] - $scope.Dinamismo[2]);
        $scope.Dinamismo.push($scope.Dinamismo[3] + 36);
        //Dominancia
        $scope.Dominancia.push("Dominancia");
        $scope.Dominancia.push($scope.respuestas[12].resp + $scope.respuestas[38].resp + $scope.respuestas[58].resp +
            $scope.respuestas[72].resp + $scope.respuestas[101].resp + $scope.respuestas[116].resp );
        $scope.Dominancia.push($scope.respuestas[18].resp + $scope.respuestas[30].resp + $scope.respuestas[60].resp +
            $scope.respuestas[70].resp + $scope.respuestas[94].resp + $scope.respuestas[122].resp );
        $scope.Dominancia.push($scope.Dominancia[1] - $scope.Dominancia[2]);
        $scope.Dominancia.push($scope.Dominancia[3] + 36);
        //Cooperación/Empatía
        $scope.Cooperacion_Empatia.push("Cooperación/Empatía");
        $scope.Cooperacion_Empatia.push($scope.respuestas[9].resp + $scope.respuestas[33].resp + $scope.respuestas[47].resp +
            $scope.respuestas[85].resp + $scope.respuestas[108].resp + $scope.respuestas[110].resp );
        $scope.Cooperacion_Empatia.push($scope.respuestas[3].resp + $scope.respuestas[27].resp + $scope.respuestas[69].resp +
            $scope.respuestas[129].resp);
        $scope.Cooperacion_Empatia.push($scope.Cooperacion_Empatia[1] - $scope.Cooperacion_Empatia[2]);
        $scope.Cooperacion_Empatia.push($scope.Cooperacion_Empatia[3] + 36);
        //Cordialidad_Amabilidad
        $scope.Cordialidad_Amabilidad.push("Cordialidad/Amabilidad");
        $scope.Cordialidad_Amabilidad.push($scope.respuestas[21].resp + $scope.respuestas[43].resp + $scope.respuestas[51].resp +
            $scope.respuestas[87].resp + $scope.respuestas[92].resp + $scope.respuestas[125].resp );
        $scope.Cordialidad_Amabilidad.push($scope.respuestas[15].resp + $scope.respuestas[39].resp + $scope.respuestas[64].resp +
            $scope.respuestas[73].resp + $scope.respuestas[107].resp + $scope.respuestas[127].resp);
        $scope.Cordialidad_Amabilidad.push($scope.Cordialidad_Amabilidad[1] - $scope.Cordialidad_Amabilidad[2]);
        $scope.Cordialidad_Amabilidad.push($scope.Cordialidad_Amabilidad[3] + 36);
        //Escrupulosidad
        $scope.Escrupulosidad.push("Escrupulosidad");
        $scope.Escrupulosidad.push($scope.respuestas[7].resp + $scope.respuestas[25].resp + $scope.respuestas[56].resp +
            $scope.respuestas[78].resp + $scope.respuestas[105].resp + $scope.respuestas[128].resp );
        $scope.Escrupulosidad.push($scope.respuestas[1].resp + $scope.respuestas[31].resp + $scope.respuestas[65].resp +
            $scope.respuestas[81].resp + $scope.respuestas[109].resp + $scope.respuestas[131].resp);
        $scope.Escrupulosidad.push($scope.Escrupulosidad[1] - $scope.Escrupulosidad[2]);
        $scope.Escrupulosidad.push($scope.Escrupulosidad[3] + 36);
        //Perseverancia
        $scope.Perseverancia.push("Perseverancia");
        $scope.Perseverancia.push($scope.respuestas[19].resp + $scope.respuestas[45].resp + $scope.respuestas[47].resp +
            $scope.respuestas[74].resp + $scope.respuestas[95].resp + $scope.respuestas[114].resp );
        $scope.Perseverancia.push($scope.respuestas[13].resp + $scope.respuestas[37].resp + $scope.respuestas[53].resp +
            $scope.respuestas[84].resp + $scope.respuestas[106].resp + $scope.respuestas[124].resp);
        $scope.Perseverancia.push($scope.Perseverancia[1] - $scope.Perseverancia[2]);
        //Control de emociones
        $scope.Control_de_emociones.push("Control de emociones");
        $scope.Control_de_emociones.push($scope.respuestas[7].resp + $scope.respuestas[26].resp + $scope.respuestas[49].resp +
            $scope.respuestas[80].resp + $scope.respuestas[87].resp + $scope.respuestas[121].resp );
        $scope.Control_de_emociones.push($scope.respuestas[2].resp + $scope.respuestas[31].resp + $scope.respuestas[61].resp +
            $scope.respuestas[67].resp + $scope.respuestas[97].resp + $scope.respuestas[119].resp);
        $scope.Control_de_emociones.push($scope.Control_de_emociones[1] - $scope.Control_de_emociones[2]);
        $scope.Control_de_emociones.push($scope.Control_de_emociones[3] + 36);
        //Control de impulsos
        $scope.Control_de_impulsos.push("Control de impulsos");
        $scope.Control_de_impulsos.push($scope.respuestas[20].resp + $scope.respuestas[42].resp + $scope.respuestas[57].resp +
            $scope.respuestas[75].resp + $scope.respuestas[90].resp + $scope.respuestas[118].resp );
        $scope.Control_de_impulsos.push($scope.respuestas[14].resp + $scope.respuestas[44].resp + $scope.respuestas[62].resp +
            $scope.respuestas[81].resp + $scope.respuestas[103].resp + $scope.respuestas[115].resp);
        $scope.Control_de_impulsos.push($scope.Control_de_impulsos[1] - $scope.Control_de_impulsos[2]);
        $scope.Control_de_impulsos.push($scope.Control_de_impulsos[3] + 36);
        //Apertura a la cultura
        $scope.Apertura_a_la_cultura.push("Apertura a la cultura");
        $scope.Apertura_a_la_cultura.push($scope.respuestas[4].resp + $scope.respuestas[28].resp + $scope.respuestas[59].resp +
            $scope.respuestas[86].resp + $scope.respuestas[104].resp + $scope.respuestas[111].resp );
        $scope.Apertura_a_la_cultura.push($scope.respuestas[10].resp + $scope.respuestas[41].resp + $scope.respuestas[54].resp +
            $scope.respuestas[76].resp + $scope.respuestas[89].resp + $scope.respuestas[123].resp);
        $scope.Apertura_a_la_cultura.push($scope.Apertura_a_la_cultura[1] - $scope.Apertura_a_la_cultura[2]);
        $scope.Apertura_a_la_cultura.push($scope.Apertura_a_la_cultura[3] + 36);
        //Apertura a la experiencia
        $scope.Apertura_a_la_experiencia.push("Apertura a la experiencia");
        $scope.Apertura_a_la_experiencia.push($scope.respuestas[22].resp + $scope.respuestas[40].resp + $scope.respuestas[55].resp +
            $scope.respuestas[71].resp + $scope.respuestas[96].resp + $scope.respuestas[117].resp );
        $scope.Apertura_a_la_experiencia.push($scope.respuestas[16].resp + $scope.respuestas[34].resp + $scope.respuestas[46].resp +
            $scope.respuestas[66].resp + $scope.respuestas[102].resp + $scope.respuestas[130].resp);
        $scope.Apertura_a_la_experiencia.push($scope.Apertura_a_la_experiencia[1] - $scope.Apertura_a_la_experiencia[2]);
        $scope.Apertura_a_la_experiencia.push($scope.Apertura_a_la_experiencia[3] + 36);
        //Distorsión
        $scope.Distorsion.push("Distorsión");
        $scope.Distorsion.push($scope.respuestas[5].resp + $scope.respuestas[11].resp + $scope.respuestas[17].resp +
            $scope.respuestas[23].resp + $scope.respuestas[29].resp + $scope.respuestas[35].resp  + $scope.respuestas[79].resp
            + $scope.respuestas[83].resp  + $scope.respuestas[91].resp  + $scope.respuestas[100].resp  + $scope.respuestas[112].resp
            + $scope.respuestas[126].resp );
        $scope.Distorsion.push(0);
        $scope.Distorsion.push($scope.Distorsion[1] - $scope.Distorsion[2]);
        $scope.Distorsion.push($scope.Distorsion[3]);

     $scope.Perseverancia.push($scope.Distorsion[4]);
        //Totales
        //DINAMISMO
        $scope.Dinamismo.push($scope.Dinamismo[4] + $scope.Dominancia[4]);
        //Dominancia
        $scope.Dominancia.push($scope.Cooperacion_Empatia[4] + $scope.Cordialidad_Amabilidad[4]);
        //Cooperacion_Empatia
        $scope.Cooperacion_Empatia.push($scope.Escrupulosidad[4] + $scope.Perseverancia[4]);
        //Cordialidad_Amabilidad
        $scope.Cordialidad_Amabilidad.push($scope.Control_de_emociones[4] + $scope.Control_de_impulsos[4]);
        //Escrupulosidad
        $scope.Escrupulosidad.push($scope.Apertura_a_la_cultura[4] + $scope.Apertura_a_la_experiencia[4]);
        //Perseverancia
        $scope.Perseverancia.push($scope.Distorsion[4]);


        console.log($scope.Dinamismo);
        console.log($scope.Dominancia);
        console.log($scope.Cooperacion_Empatia);
        console.log($scope.Cordialidad_Amabilidad);
        console.log($scope.Escrupulosidad);
        console.log($scope.Perseverancia);
        console.log($scope.Control_de_emociones);
        console.log($scope.Control_de_impulsos);
        console.log($scope.Apertura_a_la_cultura);
        console.log($scope.Apertura_a_la_experiencia);
        console.log($scope.Distorsion);

        //arrayResults
        $scope.arrayResults1 = [];
        $scope.arrayResults1.push({"id":10, "value": 27}
            ,{"id":11, "value": 27}
            ,{"id":12, "value": 27}
            ,{"id":13, "value": 27}
            ,{"id":14, "value": 27}
            ,{"id":15, "value": 27}
            ,{"id":16, "value": 27}
            ,{"id":17, "value": 27}
            ,{"id":18, "value": 27}
            ,{"id":19, "value": 27}
            ,{"id":20, "value": 27}
            ,{"id":21, "value": 27}
            ,{"id":22, "value": 27}
            ,{"id":23, "value": 27}
            ,{"id":24, "value": 27}
            ,{"id":25, "value": 27}
            ,{"id":26, "value": 27}
            ,{"id":27, "value": 27}
            ,{"id":28, "value": 27}
            ,{"id":29, "value": 27}
            ,{"id":30, "value": 27}
            ,{"id":31, "value": 27}
            ,{"id":32, "value": 27}
            ,{"id":33, "value": 27}
            ,{"id":34, "value": 27}
            ,{"id":35, "value": 27}
            ,{"id":36, "value": 27}
            ,{"id":37, "value": 27}
            ,{"id":38, "value": 27}
            ,{"id":39, "value": 27}
            ,{"id":40, "value": 27}
            ,{"id":41, "value": 27}
            ,{"id":42, "value": 27}
            ,{"id":43, "value": 27}
            ,{"id":44, "value": 27}
            ,{"id":45, "value": 27}
            ,{"id":46, "value": 27}
            ,{"id":47, "value": 27}
            ,{"id":48, "value": 27}
            ,{"id":49, "value": 27}
            ,{"id":50, "value": 27}
            ,{"id":51, "value": 27}
            ,{"id":52, "value": 27}
            ,{"id":53, "value": 27}
            ,{"id":54, "value": 27}
            ,{"id":55, "value": 28}
            ,{"id":56, "value": 29}
            ,{"id":57, "value": 31}
            ,{"id":58, "value": 32}
            ,{"id":59, "value": 33}
            ,{"id":60, "value": 34}
            ,{"id":61, "value": 34}
            ,{"id":62, "value": 34}
            ,{"id":63, "value": 37}
            ,{"id":64, "value": 37}
            ,{"id":65, "value": 38}
            ,{"id":66, "value": 39}
            ,{"id":67, "value": 40}
            ,{"id":68, "value": 41}
            ,{"id":69, "value": 42}
            ,{"id":70, "value": 43}
            ,{"id":71, "value": 44}
            ,{"id":72, "value": 45}
            ,{"id":73, "value": 46}
            ,{"id":74, "value": 47}
            ,{"id":75, "value": 49}
            ,{"id":76, "value": 50}
            ,{"id":77, "value": 51}
            ,{"id":78, "value": 53}
            ,{"id":79, "value": 54}
            ,{"id":80, "value": 55}
            ,{"id":81, "value": 56}
            ,{"id":82, "value": 56}
            ,{"id":83, "value": 57}
            ,{"id":84, "value": 58}
            ,{"id":85, "value": 58}
            ,{"id":86, "value": 60}
            ,{"id":87, "value": 63}
            ,{"id":88, "value": 64}
            ,{"id":89, "value": 65}
            ,{"id":90, "value": 66}
            ,{"id":91, "value": 66}
            ,{"id":92, "value": 66}
            ,{"id":93, "value": 67}
            ,{"id":94, "value": 68}
            ,{"id":95, "value": 68}
            ,{"id":96, "value": 69}
            ,{"id":97, "value": 69}
            ,{"id":98, "value": 71}
            ,{"id":99, "value": 72}
            ,{"id":100, "value": 73}
            ,{"id":101, "value": 73}
            ,{"id":102, "value": 73}
            ,{"id":103, "value": 73}
            ,{"id":104, "value": 73}
            ,{"id":105, "value": 73}
            ,{"id":106, "value": 73}
            ,{"id":107, "value": 74}
            ,{"id":108, "value": 74}
            ,{"id":109, "value": 74}
            ,{"id":110, "value": 74}
            ,{"id":111, "value": 74}
            ,{"id":112, "value": 74}
            ,{"id":113, "value": 75}
            ,{"id":114, "value": 75}
            ,{"id":115, "value": 75}
            ,{"id":116, "value": 75}
            ,{"id":117, "value": 75}
            ,{"id":118, "value": 75}
            ,{"id":119, "value": 75}
            ,{"id":120, "value": 75}
        );
        console.log($scope.arrayResults1);
        $scope.Dinamismo.push($scope.arrayResults1.filter(obj => obj.id == $scope.Dinamismo[5])[0].value);
        console.log($scope.Dinamismo);

        $scope.arrayResults2 = [];
        $scope.arrayResults2.push({"id":10, "value": 24}
            ,{"id":11, "value": 26}
            ,{"id":12, "value": 27}
            ,{"id":13, "value": 27}
            ,{"id":14, "value": 27}
            ,{"id":15, "value": 27}
            ,{"id":16, "value": 27}
            ,{"id":17, "value": 27}
            ,{"id":18, "value": 27}
            ,{"id":19, "value": 27}
            ,{"id":20, "value": 27}
            ,{"id":21, "value": 27}
            ,{"id":22, "value": 27}
            ,{"id":23, "value": 27}
            ,{"id":24, "value": 27}
            ,{"id":25, "value": 27}
            ,{"id":26, "value": 27}
            ,{"id":27, "value": 27}
            ,{"id":28, "value": 27}
            ,{"id":29, "value": 27}
            ,{"id":30, "value": 27}
            ,{"id":31, "value": 27}
            ,{"id":32, "value": 27}
            ,{"id":33, "value": 27}
            ,{"id":34, "value": 27}
            ,{"id":35, "value": 27}
            ,{"id":36, "value": 27}
            ,{"id":37, "value": 27}
            ,{"id":38, "value": 27}
            ,{"id":39, "value": 27}
            ,{"id":40, "value": 27}
            ,{"id":41, "value": 27}
            ,{"id":42, "value": 27}
            ,{"id":43, "value": 27}
            ,{"id":44, "value": 27}
            ,{"id":45, "value": 27}
            ,{"id":46, "value": 27}
            ,{"id":47, "value": 27}
            ,{"id":48, "value": 27}
            ,{"id":49, "value": 27}
            ,{"id":50, "value": 27}
            ,{"id":51, "value": 27}
            ,{"id":52, "value": 27}
            ,{"id":53, "value": 27}
            ,{"id":54, "value": 27}
            ,{"id":55, "value": 27}
            ,{"id":56, "value": 27}
            ,{"id":57, "value": 27}
            ,{"id":58, "value": 27}
            ,{"id":59, "value": 27}
            ,{"id":60, "value": 27}
            ,{"id":61, "value": 27}
            ,{"id":62, "value": 28}
            ,{"id":63, "value": 29}
            ,{"id":64, "value": 30}
            ,{"id":65, "value": 31}
            ,{"id":66, "value": 32}
            ,{"id":67, "value": 33}
            ,{"id":68, "value": 34}
            ,{"id":69, "value": 34}
            ,{"id":70, "value": 34}
            ,{"id":71, "value": 37}
            ,{"id":72, "value": 40}
            ,{"id":73, "value": 41}
            ,{"id":74, "value": 42}
            ,{"id":75, "value": 43}
            ,{"id":76, "value": 43}
            ,{"id":77, "value": 44}
            ,{"id":78, "value": 46}
            ,{"id":79, "value": 47}
            ,{"id":80, "value": 49}
            ,{"id":81, "value": 50}
            ,{"id":82, "value": 51}
            ,{"id":83, "value": 53}
            ,{"id":84, "value": 54}
            ,{"id":85, "value": 55}
            ,{"id":86, "value": 56}
            ,{"id":87, "value": 57}
            ,{"id":88, "value": 58}
            ,{"id":89, "value": 58}
            ,{"id":90, "value": 60}
            ,{"id":91, "value": 63}
            ,{"id":92, "value": 64}
            ,{"id":93, "value": 65}
            ,{"id":94, "value": 66}
            ,{"id":95, "value": 66}
            ,{"id":96, "value": 68}
            ,{"id":97, "value": 68}
            ,{"id":98, "value": 69}
            ,{"id":99, "value": 71}
            ,{"id":100, "value": 72}
            ,{"id":101, "value": 73}
            ,{"id":102, "value": 73}
            ,{"id":103, "value": 73}
            ,{"id":104, "value": 73}
            ,{"id":105, "value": 73}
            ,{"id":106, "value": 73}
            ,{"id":107, "value": 73}
            ,{"id":108, "value": 74}
            ,{"id":109, "value": 74}
            ,{"id":110, "value": 74}
            ,{"id":111, "value": 74}
            ,{"id":112, "value": 74}
            ,{"id":113, "value": 74}
            ,{"id":114, "value": 75}
            ,{"id":115, "value": 75}
            ,{"id":116, "value": 75}
            ,{"id":117, "value": 75}
            ,{"id":118, "value": 75}
            ,{"id":119, "value": 75}
            ,{"id":120, "value": 75}
        );
        console.log($scope.arrayResults2);
        $scope.Dominancia.push($scope.arrayResults2.filter(obj => obj.id == $scope.Dominancia[5])[0].value);
        console.log($scope.Dominancia);

        $scope.arrayResults3 = [];
        $scope.arrayResults3.push({"id":10, "value": 27}
            ,{"id":11, "value": 27}
            ,{"id":12, "value": 27}
            ,{"id":13, "value": 27}
            ,{"id":14, "value": 27}
            ,{"id":15, "value": 27}
            ,{"id":16, "value": 27}
            ,{"id":17, "value": 27}
            ,{"id":18, "value": 27}
            ,{"id":19, "value": 27}
            ,{"id":20, "value": 27}
            ,{"id":21, "value": 27}
            ,{"id":22, "value": 27}
            ,{"id":23, "value": 27}
            ,{"id":24, "value": 27}
            ,{"id":25, "value": 27}
            ,{"id":26, "value": 27}
            ,{"id":27, "value": 27}
            ,{"id":28, "value": 27}
            ,{"id":29, "value": 27}
            ,{"id":30, "value": 27}
            ,{"id":31, "value": 27}
            ,{"id":32, "value": 27}
            ,{"id":33, "value": 27}
            ,{"id":34, "value": 27}
            ,{"id":35, "value": 27}
            ,{"id":36, "value": 27}
            ,{"id":37, "value": 27}
            ,{"id":38, "value": 27}
            ,{"id":39, "value": 27}
            ,{"id":40, "value": 27}
            ,{"id":41, "value": 27}
            ,{"id":42, "value": 27}
            ,{"id":43, "value": 27}
            ,{"id":44, "value": 27}
            ,{"id":45, "value": 27}
            ,{"id":46, "value": 27}
            ,{"id":47, "value": 27}
            ,{"id":48, "value": 27}
            ,{"id":49, "value": 27}
            ,{"id":50, "value": 27}
            ,{"id":51, "value": 27}
            ,{"id":52, "value": 27}
            ,{"id":53, "value": 27}
            ,{"id":54, "value": 28}
            ,{"id":55, "value": 29}
            ,{"id":56, "value": 30}
            ,{"id":57, "value": 31}
            ,{"id":58, "value": 31}
            ,{"id":59, "value": 31}
            ,{"id":60, "value": 31}
            ,{"id":61, "value": 32}
            ,{"id":62, "value": 33}
            ,{"id":63, "value": 34}
            ,{"id":64, "value": 34}
            ,{"id":65, "value": 34}
            ,{"id":66, "value": 34}
            ,{"id":67, "value": 34}
            ,{"id":68, "value": 37}
            ,{"id":69, "value": 38}
            ,{"id":70, "value": 40}
            ,{"id":71, "value": 41}
            ,{"id":72, "value": 42}
            ,{"id":73, "value": 43}
            ,{"id":74, "value": 43}
            ,{"id":75, "value": 44}
            ,{"id":76, "value": 46}
            ,{"id":77, "value": 47}
            ,{"id":78, "value": 49}
            ,{"id":79, "value": 50}
            ,{"id":80, "value": 50}
            ,{"id":81, "value": 51}
            ,{"id":82, "value": 53}
            ,{"id":83, "value": 54}
            ,{"id":84, "value": 54}
            ,{"id":85, "value": 55}
            ,{"id":86, "value": 56}
            ,{"id":87, "value": 57}
            ,{"id":88, "value": 58}
            ,{"id":89, "value": 58}
            ,{"id":90, "value": 60}
            ,{"id":91, "value": 63}
            ,{"id":92, "value": 64}
            ,{"id":93, "value": 65}
            ,{"id":94, "value": 66}
            ,{"id":95, "value": 66}
            ,{"id":96, "value": 67}
            ,{"id":97, "value": 68}
            ,{"id":98, "value": 69}
            ,{"id":99, "value": 71}
            ,{"id":100, "value": 72}
            ,{"id":101, "value": 73}
            ,{"id":102, "value": 73}
            ,{"id":103, "value": 73}
            ,{"id":104, "value": 73}
            ,{"id":105, "value": 73}
            ,{"id":106, "value": 73}
            ,{"id":107, "value": 73}
            ,{"id":108, "value": 74}
            ,{"id":109, "value": 74}
            ,{"id":110, "value": 74}
            ,{"id":111, "value": 74}
            ,{"id":112, "value": 74}
            ,{"id":113, "value": 74}
            ,{"id":114, "value": 75}
            ,{"id":115, "value": 75}
            ,{"id":116, "value": 75}
            ,{"id":117, "value": 75}
            ,{"id":118, "value": 75}
            ,{"id":119, "value": 75}
            ,{"id":120, "value": 75}
        );
        console.log($scope.arrayResults3);
        $scope.Cooperacion_Empatia.push($scope.arrayResults3.filter(obj => obj.id == $scope.Cooperacion_Empatia[5])[0].value);
        console.log($scope.Cooperacion_Empatia);

        $scope.arrayResults4 = [];
        $scope.arrayResults4.push({"id":10, "value": 27}
            ,{"id":11, "value": 27}
            ,{"id":12, "value": 27}
            ,{"id":13, "value": 27}
            ,{"id":14, "value": 27}
            ,{"id":15, "value": 27}
            ,{"id":16, "value": 27}
            ,{"id":17, "value": 27}
            ,{"id":18, "value": 27}
            ,{"id":19, "value": 27}
            ,{"id":20, "value": 27}
            ,{"id":21, "value": 27}
            ,{"id":22, "value": 27}
            ,{"id":23, "value": 27}
            ,{"id":24, "value": 27}
            ,{"id":25, "value": 27}
            ,{"id":26, "value": 27}
            ,{"id":27, "value": 27}
            ,{"id":28, "value": 27}
            ,{"id":29, "value": 27}
            ,{"id":30, "value": 27}
            ,{"id":31, "value": 27}
            ,{"id":32, "value": 27}
            ,{"id":33, "value": 27}
            ,{"id":34, "value": 27}
            ,{"id":35, "value": 27}
            ,{"id":36, "value": 27}
            ,{"id":37, "value": 27}
            ,{"id":38, "value": 27}
            ,{"id":39, "value": 27}
            ,{"id":40, "value": 28}
            ,{"id":41, "value": 29}
            ,{"id":42, "value": 30}
            ,{"id":43, "value": 31}
            ,{"id":44, "value": 31}
            ,{"id":45, "value": 31}
            ,{"id":46, "value": 31}
            ,{"id":47, "value": 32}
            ,{"id":48, "value": 33}
            ,{"id":49, "value": 34}
            ,{"id":50, "value": 34}
            ,{"id":51, "value": 34}
            ,{"id":52, "value": 37}
            ,{"id":53, "value": 37}
            ,{"id":54, "value": 38}
            ,{"id":55, "value": 39}
            ,{"id":56, "value": 40}
            ,{"id":57, "value": 41}
            ,{"id":58, "value": 42}
            ,{"id":59, "value": 43}
            ,{"id":60, "value": 43}
            ,{"id":61, "value": 43}
            ,{"id":62, "value": 43}
            ,{"id":63, "value": 44}
            ,{"id":64, "value": 45}
            ,{"id":65, "value": 46}
            ,{"id":66, "value": 0}
            ,{"id":67, "value": 47}
            ,{"id":68, "value": 48}
            ,{"id":69, "value": 49}
            ,{"id":70, "value": 50}
            ,{"id":71, "value": 51}
            ,{"id":72, "value": 53}
            ,{"id":73, "value": 54}
            ,{"id":74, "value": 54}
            ,{"id":75, "value": 55}
            ,{"id":76, "value": 56}
            ,{"id":77, "value": 56}
            ,{"id":78, "value": 57}
            ,{"id":79, "value": 58}
            ,{"id":80, "value": 58}
            ,{"id":81, "value": 58}
            ,{"id":82, "value": 60}
            ,{"id":83, "value": 63}
            ,{"id":84, "value": 64}
            ,{"id":85, "value": 65}
            ,{"id":86, "value": 66}
            ,{"id":87, "value": 66}
            ,{"id":88, "value": 66}
            ,{"id":89, "value": 66}
            ,{"id":90, "value": 67}
            ,{"id":91, "value": 68}
            ,{"id":92, "value": 68}
            ,{"id":93, "value": 69}
            ,{"id":94, "value": 69}
            ,{"id":95, "value": 71}
            ,{"id":96, "value": 72}
            ,{"id":97, "value": 73}
            ,{"id":98, "value": 73}
            ,{"id":99, "value": 73}
            ,{"id":100, "value": 73}
            ,{"id":101, "value": 73}
            ,{"id":102, "value": 73}
            ,{"id":103, "value": 73}
            ,{"id":104, "value": 74}
            ,{"id":105, "value": 74}
            ,{"id":106, "value": 74}
            ,{"id":107, "value": 74}
            ,{"id":108, "value": 74}
            ,{"id":109, "value": 74}
            ,{"id":110, "value": 75}
            ,{"id":111, "value": 75}
            ,{"id":112, "value": 75}
            ,{"id":113, "value": 75}
            ,{"id":114, "value": 75}
            ,{"id":115, "value": 75}
            ,{"id":116, "value": 75}
            ,{"id":117, "value": 75}
        );
        console.log($scope.arrayResults4);
        $scope.Cordialidad_Amabilidad.push($scope.arrayResults4.filter(obj => obj.id == $scope.Cordialidad_Amabilidad[5])[0].value);
        console.log($scope.Cordialidad_Amabilidad);

     $scope.arrayResults5 = [];
     $scope.arrayResults5.push({"id":10, "value": 27}
         ,{"id":11, "value": 27}
         ,{"id":12, "value": 27}
         ,{"id":13, "value": 27}
         ,{"id":14, "value": 27}
         ,{"id":15, "value": 27}
         ,{"id":16, "value": 27}
         ,{"id":17, "value": 27}
         ,{"id":18, "value": 27}
         ,{"id":19, "value": 27}
         ,{"id":20, "value": 27}
         ,{"id":21, "value": 27}
         ,{"id":22, "value": 27}
         ,{"id":23, "value": 27}
         ,{"id":24, "value": 27}
         ,{"id":25, "value": 27}
         ,{"id":26, "value": 27}
         ,{"id":27, "value": 27}
         ,{"id":28, "value": 27}
         ,{"id":29, "value": 27}
         ,{"id":30, "value": 27}
         ,{"id":31, "value": 27}
         ,{"id":32, "value": 27}
         ,{"id":33, "value": 27}
         ,{"id":34, "value": 27}
         ,{"id":35, "value": 27}
         ,{"id":36, "value": 27}
         ,{"id":37, "value": 27}
         ,{"id":38, "value": 27}
         ,{"id":39, "value": 27}
         ,{"id":40, "value": 27}
         ,{"id":41, "value": 27}
         ,{"id":42, "value": 27}
         ,{"id":43, "value": 27}
         ,{"id":44, "value": 27}
         ,{"id":45, "value": 27}
         ,{"id":46, "value": 27}
         ,{"id":47, "value": 27}
         ,{"id":48, "value": 27}
         ,{"id":49, "value": 27}
         ,{"id":50, "value": 27}
         ,{"id":51, "value": 27}
         ,{"id":52, "value": 27}
         ,{"id":53, "value": 27}
         ,{"id":54, "value": 27}
         ,{"id":55, "value": 27}
         ,{"id":56, "value": 27}
         ,{"id":57, "value": 27}
         ,{"id":58, "value": 27}
         ,{"id":59, "value": 28}
         ,{"id":60, "value": 29}
         ,{"id":61, "value": 30}
         ,{"id":62, "value": 31}
         ,{"id":63, "value": 31}
         ,{"id":64, "value": 31}
         ,{"id":65, "value": 32}
         ,{"id":66, "value": 33}
         ,{"id":67, "value": 34}
         ,{"id":68, "value": 34}
         ,{"id":69, "value": 34}
         ,{"id":70, "value": 37}
         ,{"id":71, "value": 38}
         ,{"id":72, "value": 40}
         ,{"id":73, "value": 41}
         ,{"id":74, "value": 42}
         ,{"id":75, "value": 43}
         ,{"id":76, "value": 43}
         ,{"id":77, "value": 44}
         ,{"id":78, "value": 45}
         ,{"id":79, "value": 46}
         ,{"id":80, "value": 47}
         ,{"id":81, "value": 48}
         ,{"id":82, "value": 49}
         ,{"id":83, "value": 50}
         ,{"id":84, "value": 51}
         ,{"id":85, "value": 53}
         ,{"id":86, "value": 54}
         ,{"id":87, "value": 54}
         ,{"id":88, "value": 55}
         ,{"id":89, "value": 56}
         ,{"id":90, "value": 56}
         ,{"id":91, "value": 57}
         ,{"id":92, "value": 58}
         ,{"id":93, "value": 58}
         ,{"id":94, "value": 58}
         ,{"id":95, "value": 60}
         ,{"id":96, "value": 63}
         ,{"id":97, "value": 64}
         ,{"id":98, "value": 65}
         ,{"id":99, "value": 66}
         ,{"id":100, "value": 66}
         ,{"id":101, "value": 66}
         ,{"id":102, "value": 68}
         ,{"id":103, "value": 68}
         ,{"id":104, "value": 69}
         ,{"id":105, "value": 71}
         ,{"id":106, "value": 72}
         ,{"id":107, "value": 73}
         ,{"id":108, "value": 73}
         ,{"id":109, "value": 73}
         ,{"id":110, "value": 73}
         ,{"id":111, "value": 73}
         ,{"id":112, "value": 73}
         ,{"id":113, "value": 73}
         ,{"id":114, "value": 75}
         ,{"id":115, "value": 75}
         ,{"id":116, "value": 75}
         ,{"id":117, "value": 75}
         ,{"id":118, "value": 75}
         ,{"id":119, "value": 75}
         ,{"id":120, "value": 75}
     );
     console.log($scope.arrayResults5);
     $scope.Escrupulosidad.push($scope.arrayResults5.filter(obj => obj.id == $scope.Escrupulosidad[5])[0].value);
     console.log($scope.Escrupulosidad);

     $scope.arrayResults6 = [];
     $scope.arrayResults6.push({"id":5, "value": 27}
         ,{"id":6, "value": 27}
         ,{"id":7, "value": 27}
         ,{"id":8, "value": 27}
         ,{"id":9, "value": 27}
         ,{"id":10, "value": 27}
         ,{"id":11, "value": 27}
         ,{"id":12, "value": 27}
         ,{"id":13, "value": 27}
         ,{"id":14, "value": 27}
         ,{"id":15, "value": 29}
         ,{"id":16, "value": 31}
         ,{"id":17, "value": 32}
         ,{"id":18, "value": 34}
         ,{"id":19, "value": 37}
         ,{"id":20, "value": 38}
         ,{"id":21, "value": 40}
         ,{"id":22, "value": 42}
         ,{"id":23, "value": 43}
         ,{"id":24, "value": 44}
         ,{"id":25, "value": 46}
         ,{"id":26, "value": 47}
         ,{"id":27, "value": 49}
         ,{"id":28, "value": 50}
         ,{"id":29, "value": 51}
         ,{"id":30, "value": 53}
         ,{"id":31, "value": 54}
         ,{"id":32, "value": 56}
         ,{"id":33, "value": 57}
         ,{"id":34, "value": 58}
         ,{"id":35, "value": 60}
         ,{"id":36, "value": 64}
         ,{"id":37, "value": 66}
         ,{"id":38, "value": 66}
         ,{"id":39, "value": 68}
         ,{"id":40, "value": 69}
         ,{"id":41, "value": 71}
         ,{"id":42, "value": 72}
         ,{"id":43, "value": 73}
         ,{"id":44, "value": 73}
         ,{"id":45, "value": 73}
         ,{"id":46, "value": 73}
         ,{"id":47, "value": 73}
         ,{"id":48, "value": 73}
         ,{"id":49, "value": 73}
         ,{"id":50, "value": 74}
         ,{"id":51, "value": 74}
         ,{"id":52, "value": 74}
         ,{"id":53, "value": 74}
         ,{"id":54, "value": 74}
         ,{"id":55, "value": 74}
         ,{"id":56, "value": 75}
         ,{"id":57, "value": 75}
         ,{"id":58, "value": 75}
         ,{"id":59, "value": 75}
         ,{"id":60, "value": 75}
     );
     console.log($scope.arrayResults6);
     $scope.Perseverancia.push($scope.arrayResults6.filter(obj => obj.id == $scope.Perseverancia[5])[0].value);
     console.log($scope.Perseverancia);


        $scope.arrayResult = ["a","b","c","d","e","f","g","h"];
        $scope.matriz = [$scope.arrayResult.length][$scope.arrayCaracteristicas.length];
        $scope.matriz[0,0] = $scope.arrayCaracteristicas[0];
        $scope.matriz [0,1] = $scope.respuestas[0].resp + $scope.respuestas[24].resp + $scope.respuestas[52].resp +
                                 $scope.respuestas[67].resp + $scope.respuestas[93].resp + $scope.respuestas[113].resp;


       /* $scope.result = [
            {
                "desDimencion" : "Energía (E)",
                "desSubEscala1" : "Dinamismo",
                "desSubEscala2" : "Dominancia ",
                "ptj1" :


                }
        ];*/

        $scope.resultado = [];

        $scope.Esquizoide=0;
        $scope.Evitativo=0;
        $scope.Depresivo=0;
        $scope.Dependiente=0;
        $scope.Histrionico=0;
        $scope.Narcisita=0;
        $scope.Antisocial=0;
        $scope.Agresivo=0;
        $scope.Compulsivo=0;
        $scope.Negativista=0;
        $scope.Autodestructiva=0;
        $scope.Esquizotipica=0;
        $scope.Limite=0;
        $scope.Paranoide=0;
        $scope.TAnsiedad=0;
        $scope.TSomatoformo=0;
        $scope.TBipolar=0;
        $scope.TDistimico=0;
        $scope.Dalcohol=0;
        $scope.Dsustancias=0;
        $scope.Tpostraumatico=0;
        $scope.Dpensamiento=0;
        $scope.Dmayor=0;
        $scope.Ddelusional=0;
        $scope.Sinceridad=0;
        $scope.DSocial=0;
        $scope.Devaluacion=0;
        $scope.Validez=0;


        for (i=0; i < $scope.respuestas.length ; i++)
        {
            // Esquizoide
            if($scope.respuestas[i].cod == 	'4'	||
                $scope.respuestas[i].cod == 	'10'	||
                $scope.respuestas[i].cod == 	'27'	||
                $scope.respuestas[i].cod == 	'32'	||
                $scope.respuestas[i].cod == 	'38'	||
                $scope.respuestas[i].cod == 	'46'	||
                $scope.respuestas[i].cod == 	'48'	||
                $scope.respuestas[i].cod == 	'57'	||
                $scope.respuestas[i].cod == 	'92'	||
                $scope.respuestas[i].cod == 	'101'	||
                $scope.respuestas[i].cod == 	'105'	||
                $scope.respuestas[i].cod == 	'142'	||
                $scope.respuestas[i].cod == 	'148'	||
                $scope.respuestas[i].cod == 	'156'	||
                $scope.respuestas[i].cod == 	'165'	||
                $scope.respuestas[i].cod == 	'167'
            )
            {
                $scope.Esquizoide = $scope.Esquizoide + $scope.respuestas[i].resp;
            }
            //Evitativo
            if($scope.respuestas[i].cod == 	'18'	||
            $scope.respuestas[i].cod == 	'40'	||
            $scope.respuestas[i].cod == 	'47'	||
            $scope.respuestas[i].cod == 	'48'	||
            $scope.respuestas[i].cod == 	'57'	||
            $scope.respuestas[i].cod == 	'69'	||
            $scope.respuestas[i].cod == 	'80'	||
            $scope.respuestas[i].cod == 	'84'	||
            $scope.respuestas[i].cod == 	'99'	||
            $scope.respuestas[i].cod == 	'127'	||
            $scope.respuestas[i].cod == 	'141'	||
            $scope.respuestas[i].cod == 	'146'	||
            $scope.respuestas[i].cod == 	'148'	||
            $scope.respuestas[i].cod == 	'151'	||
            $scope.respuestas[i].cod == 	'158'	||
            $scope.respuestas[i].cod == 	'174'
            )
            {
                $scope.Evitativo = $scope.Evitativo + $scope.respuestas[i].resp;
            }
            //Depresivo
            if($scope.respuestas[i].cod == 	'20'	||
            $scope.respuestas[i].cod == 	'24'	||
            $scope.respuestas[i].cod == 	'25'	||
            $scope.respuestas[i].cod == 	'43'	||
            $scope.respuestas[i].cod == 	'47'	||
            $scope.respuestas[i].cod == 	'83'	||
            $scope.respuestas[i].cod == 	'86'	||
            $scope.respuestas[i].cod == 	'112'	||
            $scope.respuestas[i].cod == 	'123'	||
            $scope.respuestas[i].cod == 	'133'	||
            $scope.respuestas[i].cod == 	'142'	||
            $scope.respuestas[i].cod == 	'145'	||
            $scope.respuestas[i].cod == 	'148'	||
            $scope.respuestas[i].cod == 	'151'	||
            $scope.respuestas[i].cod == 	'154'
            )
            {
                $scope.Depresivo = $scope.Depresivo + $scope.respuestas[i].resp;
            }

            //Dependiente
            if($scope.respuestas[i].cod == 	'16'	||
            $scope.respuestas[i].cod == 	'35'	||
            $scope.respuestas[i].cod == 	'45'	||
            $scope.respuestas[i].cod == 	'47'	||
            $scope.respuestas[i].cod == 	'56'	||
            $scope.respuestas[i].cod == 	'73'	||
            $scope.respuestas[i].cod == 	'82'	||
            $scope.respuestas[i].cod == 	'84'	||
            $scope.respuestas[i].cod == 	'94'	||
            $scope.respuestas[i].cod == 	'108'	||
            $scope.respuestas[i].cod == 	'120'	||
            $scope.respuestas[i].cod == 	'133'	||
            $scope.respuestas[i].cod == 	'135'	||
            $scope.respuestas[i].cod == 	'141'	||
            $scope.respuestas[i].cod == 	'151'	||
            $scope.respuestas[i].cod == 	'169'
            )
            {
                $scope.Dependiente = $scope.Dependiente + $scope.respuestas[i].resp;
            }

            //Histriónico
            if($scope.respuestas[i].cod == 	'10'	||
            $scope.respuestas[i].cod == 	'12'	||
            $scope.respuestas[i].cod == 	'21'	||
            $scope.respuestas[i].cod == 	'24'	||
            $scope.respuestas[i].cod == 	'27'	||
            $scope.respuestas[i].cod == 	'32'	||
            $scope.respuestas[i].cod == 	'48'	||
            $scope.respuestas[i].cod == 	'51'	||
            $scope.respuestas[i].cod == 	'57'	||
            $scope.respuestas[i].cod == 	'69'	||
            $scope.respuestas[i].cod == 	'80'	||
            $scope.respuestas[i].cod == 	'88'	||
            $scope.respuestas[i].cod == 	'92'	||
            $scope.respuestas[i].cod == 	'99'	||
            $scope.respuestas[i].cod == 	'123'	||
            $scope.respuestas[i].cod == 	'127'	||
            $scope.respuestas[i].cod == 	'174'
            )
            {
                $scope.Histrionico = $scope.Histrionico + $scope.respuestas[i].resp;
            }

            //Narcisita
            if($scope.respuestas[i].cod == 	'5'	||
            $scope.respuestas[i].cod == 	'21'	||
            $scope.respuestas[i].cod == 	'26'	||
            $scope.respuestas[i].cod == 	'31'	||
            $scope.respuestas[i].cod == 	'35'	||
            $scope.respuestas[i].cod == 	'38'	||
            $scope.respuestas[i].cod == 	'40'	||
            $scope.respuestas[i].cod == 	'47'	||
            $scope.respuestas[i].cod == 	'57'	||
            $scope.respuestas[i].cod == 	'67'	||
            $scope.respuestas[i].cod == 	'69'	||
            $scope.respuestas[i].cod == 	'80'	||
            $scope.respuestas[i].cod == 	'84'	||
            $scope.respuestas[i].cod == 	'85'	||
            $scope.respuestas[i].cod == 	'86'	||
            $scope.respuestas[i].cod == 	'88'	||
            $scope.respuestas[i].cod == 	'93'	||
            $scope.respuestas[i].cod == 	'94'	||
            $scope.respuestas[i].cod == 	'99'	||
            $scope.respuestas[i].cod == 	'116'	||
            $scope.respuestas[i].cod == 	'141'	||
            $scope.respuestas[i].cod == 	'144'	||
            $scope.respuestas[i].cod == 	'159'	||
            $scope.respuestas[i].cod == 	'169'
            )
            {
                $scope.Narcisita = $scope.Narcisita + $scope.respuestas[i].resp;
            }

             //Antisocial
             if($scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'13'	||
             $scope.respuestas[i].cod == 	'14'	||
             $scope.respuestas[i].cod == 	'17'	||
             $scope.respuestas[i].cod == 	'21'	||
             $scope.respuestas[i].cod == 	'38'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'52'	||
             $scope.respuestas[i].cod == 	'53'	||
             $scope.respuestas[i].cod == 	'93'	||
             $scope.respuestas[i].cod == 	'101'	||
             $scope.respuestas[i].cod == 	'113'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'136'	||
             $scope.respuestas[i].cod == 	'139'	||
             $scope.respuestas[i].cod == 	'166'	||
             $scope.respuestas[i].cod == 	'172'
             )
             {
                 $scope.Antisocial = $scope.Antisocial + $scope.respuestas[i].resp;
             }

             //Agresivo-sádico
             if($scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'9'	||
             $scope.respuestas[i].cod == 	'13'	||
             $scope.respuestas[i].cod == 	'14'	||
             $scope.respuestas[i].cod == 	'17'	||
             $scope.respuestas[i].cod == 	'28'	||
             $scope.respuestas[i].cod == 	'33'	||
             $scope.respuestas[i].cod == 	'36'	||
             $scope.respuestas[i].cod == 	'39'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'49'	||
             $scope.respuestas[i].cod == 	'53'	||
             $scope.respuestas[i].cod == 	'64'	||
             $scope.respuestas[i].cod == 	'79'	||
             $scope.respuestas[i].cod == 	'87'	||
             $scope.respuestas[i].cod == 	'93'	||
             $scope.respuestas[i].cod == 	'95'	||
             $scope.respuestas[i].cod == 	'96'	||
             $scope.respuestas[i].cod == 	'116'	||
             $scope.respuestas[i].cod == 	'166'
             )
             {
                 $scope.Agresivo = $scope.Agresivo + $scope.respuestas[i].resp;
             }

             //Compulsivo
             if($scope.respuestas[i].cod == 	'2'	||
             $scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'14'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'29'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'53'	||
             $scope.respuestas[i].cod == 	'59'	||
             $scope.respuestas[i].cod == 	'72'	||
             $scope.respuestas[i].cod == 	'82'	||
             $scope.respuestas[i].cod == 	'97'	||
             $scope.respuestas[i].cod == 	'101'	||
             $scope.respuestas[i].cod == 	'114'	||
             $scope.respuestas[i].cod == 	'137'	||
             $scope.respuestas[i].cod == 	'139'	||
             $scope.respuestas[i].cod == 	'166'	||
             $scope.respuestas[i].cod == 	'172'
             )
             {
                 $scope.Compulsivo = $scope.Compulsivo + $scope.respuestas[i].resp;
             }

             //Negativista
             if($scope.respuestas[i].cod == 	'6'	||
             $scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'15'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'36'	||
             $scope.respuestas[i].cod == 	'42'	||
             $scope.respuestas[i].cod == 	'50'	||
             $scope.respuestas[i].cod == 	'60'	||
             $scope.respuestas[i].cod == 	'79'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'98'	||
             $scope.respuestas[i].cod == 	'115'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'126'	||
             $scope.respuestas[i].cod == 	'133'	||
             $scope.respuestas[i].cod == 	'166'
             )
             {
                 $scope.Negativista = $scope.Negativista + $scope.respuestas[i].resp;
             }

             //Autodestructiva
             if($scope.respuestas[i].cod == 	'18'	||
             $scope.respuestas[i].cod == 	'19'	||
             $scope.respuestas[i].cod == 	'24'	||
             $scope.respuestas[i].cod == 	'25'	||
             $scope.respuestas[i].cod == 	'35'	||
             $scope.respuestas[i].cod == 	'40'	||
             $scope.respuestas[i].cod == 	'43'	||
             $scope.respuestas[i].cod == 	'70'	||
             $scope.respuestas[i].cod == 	'90'	||
             $scope.respuestas[i].cod == 	'98'	||
             $scope.respuestas[i].cod == 	'104'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'161'	||
             $scope.respuestas[i].cod == 	'169'
             )
             {
                 $scope.Autodestructiva = $scope.Autodestructiva + $scope.respuestas[i].resp;
             }

             //Esquizotípica
             if($scope.respuestas[i].cod == 	'8'	||
             $scope.respuestas[i].cod == 	'48'	||
             $scope.respuestas[i].cod == 	'69'	||
             $scope.respuestas[i].cod == 	'71'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'99'	||
             $scope.respuestas[i].cod == 	'102'	||
             $scope.respuestas[i].cod == 	'117'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'138'	||
             $scope.respuestas[i].cod == 	'141'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'151'	||
             $scope.respuestas[i].cod == 	'156'	||
             $scope.respuestas[i].cod == 	'158'	||
             $scope.respuestas[i].cod == 	'162'
             )
             {
                 $scope.Esquizotipica = $scope.Esquizotipica + $scope.respuestas[i].resp;
             }

             //Limite
             if($scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'30'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'72'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'98'	||
             $scope.respuestas[i].cod == 	'120'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'135'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'154'	||
             $scope.respuestas[i].cod == 	'161'	||
             $scope.respuestas[i].cod == 	'171'	||
             $scope.respuestas[i].cod == 	'166'
             )
             {
                 $scope.Limite = $scope.Limite + $scope.respuestas[i].resp;
             }

             //Paranoide
             if($scope.respuestas[i].cod == 	'6'	||
             $scope.respuestas[i].cod == 	'8'	||
             $scope.respuestas[i].cod == 	'33'	||
             $scope.respuestas[i].cod == 	'42'	||
             $scope.respuestas[i].cod == 	'48'	||
             $scope.respuestas[i].cod == 	'49'	||
             $scope.respuestas[i].cod == 	'60'	||
             $scope.respuestas[i].cod == 	'63'	||
             $scope.respuestas[i].cod == 	'89'	||
             $scope.respuestas[i].cod == 	'103'	||
             $scope.respuestas[i].cod == 	'115'	||
             $scope.respuestas[i].cod == 	'138'	||
             $scope.respuestas[i].cod == 	'146'	||
             $scope.respuestas[i].cod == 	'158'	||
             $scope.respuestas[i].cod == 	'159'	||
             $scope.respuestas[i].cod == 	'167'	||
             $scope.respuestas[i].cod == 	'175'
             )
             {
                 $scope.Paranoide = $scope.Paranoide + $scope.respuestas[i].resp;
             }

             //Trastornos de Ansiedad
             if($scope.respuestas[i].cod == 	'40'	||
             $scope.respuestas[i].cod == 	'58'	||
             $scope.respuestas[i].cod == 	'61'	||
             $scope.respuestas[i].cod == 	'75'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'108'	||
             $scope.respuestas[i].cod == 	'109'	||
             $scope.respuestas[i].cod == 	'124'	||
             $scope.respuestas[i].cod == 	'135'	||
             $scope.respuestas[i].cod == 	'145'	||
             $scope.respuestas[i].cod == 	'147'	||
             $scope.respuestas[i].cod == 	'149'	||
             $scope.respuestas[i].cod == 	'164'	||
             $scope.respuestas[i].cod == 	'170'
             )
             {
                 $scope.TAnsiedad = $scope.TAnsiedad + $scope.respuestas[i].resp;
             }

             //Trastorno Somatoformo
             if($scope.respuestas[i].cod == 	'1'	||
             $scope.respuestas[i].cod == 	'4'	||
             $scope.respuestas[i].cod == 	'11'	||
             $scope.respuestas[i].cod == 	'37'	||
             $scope.respuestas[i].cod == 	'55'	||
             $scope.respuestas[i].cod == 	'74'	||
             $scope.respuestas[i].cod == 	'75'	||
             $scope.respuestas[i].cod == 	'107'	||
             $scope.respuestas[i].cod == 	'111'	||
             $scope.respuestas[i].cod == 	'130'	||
             $scope.respuestas[i].cod == 	'145'	||
             $scope.respuestas[i].cod == 	'148'
             )
             {
                 $scope.TSomatoformo = $scope.TSomatoformo + $scope.respuestas[i].resp;
             }

             //Trastorno Bipolar
             if($scope.respuestas[i].cod == 	'3'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'51'	||
             $scope.respuestas[i].cod == 	'54'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'96'	||
             $scope.respuestas[i].cod == 	'106'	||
             $scope.respuestas[i].cod == 	'117'	||
             $scope.respuestas[i].cod == 	'125'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'166'	||
             $scope.respuestas[i].cod == 	'170'
             )
             {
                 $scope.TBipolar = $scope.TBipolar + $scope.respuestas[i].resp;
             }

             //Trastorno Distimico
             if($scope.respuestas[i].cod == 	'15'	||
             $scope.respuestas[i].cod == 	'24'	||
             $scope.respuestas[i].cod == 	'25'	||
             $scope.respuestas[i].cod == 	'55'	||
             $scope.respuestas[i].cod == 	'62'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'86'	||
             $scope.respuestas[i].cod == 	'104'	||
             $scope.respuestas[i].cod == 	'111'	||
             $scope.respuestas[i].cod == 	'130'	||
             $scope.respuestas[i].cod == 	'141'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'148'
             )
             {
                 $scope.TDistimico = $scope.TDistimico + $scope.respuestas[i].resp;
             }

             //Dependencia del alcohol
             if($scope.respuestas[i].cod == 	'14'	||
             $scope.respuestas[i].cod == 	'23'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'52'	||
             $scope.respuestas[i].cod == 	'64'	||
             $scope.respuestas[i].cod == 	'77'	||
             $scope.respuestas[i].cod == 	'93'	||
             $scope.respuestas[i].cod == 	'100'	||
             $scope.respuestas[i].cod == 	'101'	||
             $scope.respuestas[i].cod == 	'113'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'131'	||
             $scope.respuestas[i].cod == 	'139'	||
             $scope.respuestas[i].cod == 	'152'	||
             $scope.respuestas[i].cod == 	'166'
             )
             {
                 $scope.Dalcohol = $scope.Dalcohol + $scope.respuestas[i].resp;
             }

             //Dependencia de sustancias
             if($scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'13'	||
             $scope.respuestas[i].cod == 	'21'	||
             $scope.respuestas[i].cod == 	'38'	||
             $scope.respuestas[i].cod == 	'39'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'53'	||
             $scope.respuestas[i].cod == 	'66'	||
             $scope.respuestas[i].cod == 	'91'	||
             $scope.respuestas[i].cod == 	'101'	||
             $scope.respuestas[i].cod == 	'113'	||
             $scope.respuestas[i].cod == 	'118'	||
             $scope.respuestas[i].cod == 	'136'	||
             $scope.respuestas[i].cod == 	'139'
             )
             {
                 $scope.Dsustancias = $scope.Dsustancias + $scope.respuestas[i].resp;
             }

             //Trastorno estrés postraumático
             if($scope.respuestas[i].cod == 	'62'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'109'	||
             $scope.respuestas[i].cod == 	'123'	||
             $scope.respuestas[i].cod == 	'129'	||
             $scope.respuestas[i].cod == 	'133'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'147'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'149'	||
             $scope.respuestas[i].cod == 	'151'	||
             $scope.respuestas[i].cod == 	'154'	||
             $scope.respuestas[i].cod == 	'160'	||
             $scope.respuestas[i].cod == 	'164'	||
             $scope.respuestas[i].cod == 	'173'
             )
             {
                 $scope.Tpostraumatico = $scope.Tpostraumatico + $scope.respuestas[i].resp;
             }

             //Desorden del pensamiento
             if($scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'34'	||
             $scope.respuestas[i].cod == 	'56'	||
             $scope.respuestas[i].cod == 	'61'	||
             $scope.respuestas[i].cod == 	'68'	||
             $scope.respuestas[i].cod == 	'72'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'78'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'102'	||
             $scope.respuestas[i].cod == 	'117'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'151'	||
             $scope.respuestas[i].cod == 	'162'	||
             $scope.respuestas[i].cod == 	'168'
             )
             {
                 $scope.Dpensamiento = $scope.Dpensamiento + $scope.respuestas[i].resp;
             }

             //Depresión mayor
             if($scope.respuestas[i].cod == 	'1'	||
             $scope.respuestas[i].cod == 	'4'	||
             $scope.respuestas[i].cod == 	'34'	||
             $scope.respuestas[i].cod == 	'44'	||
             $scope.respuestas[i].cod == 	'55'	||
             $scope.respuestas[i].cod == 	'74'	||
             $scope.respuestas[i].cod == 	'104'	||
             $scope.respuestas[i].cod == 	'107'	||
             $scope.respuestas[i].cod == 	'111'	||
             $scope.respuestas[i].cod == 	'128'	||
             $scope.respuestas[i].cod == 	'130'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'149'	||
             $scope.respuestas[i].cod == 	'150'	||
             $scope.respuestas[i].cod == 	'154'	||
             $scope.respuestas[i].cod == 	'171'
             )
             {
                 $scope.Dmayor = $scope.Dmayor + $scope.respuestas[i].resp;
             }

             //Desorden delusional
             if($scope.respuestas[i].cod == 	'5'	||
             $scope.respuestas[i].cod == 	'38'	||
             $scope.respuestas[i].cod == 	'49'	||
             $scope.respuestas[i].cod == 	'63'	||
             $scope.respuestas[i].cod == 	'67'	||
             $scope.respuestas[i].cod == 	'89'	||
             $scope.respuestas[i].cod == 	'103'	||
             $scope.respuestas[i].cod == 	'119'	||
             $scope.respuestas[i].cod == 	'138'	||
             $scope.respuestas[i].cod == 	'140'	||
             $scope.respuestas[i].cod == 	'153'	||
             $scope.respuestas[i].cod == 	'159'	||
             $scope.respuestas[i].cod == 	'175'
             )
             {
                 $scope.Ddelusional = $scope.Ddelusional + $scope.respuestas[i].resp;
             }

             //Sinceridad

             $scope.Sinceridad = Math.trunc($scope.Esquizoide + $scope.Evitativo + $scope.Depresivo + $scope.Dependiente +
                                    $scope.Histrionico + $scope.Narcisita * 2 / 3 + $scope.Antisocial + $scope.Agresivo +
                                    $scope.Compulsivo + $scope.Negativista + $scope.Autodestructiva);


             //Deseabilidad Social
             if($scope.respuestas[i].cod == 	'20'	||
             $scope.respuestas[i].cod == 	'32'	||
             $scope.respuestas[i].cod == 	'35'	||
             $scope.respuestas[i].cod == 	'40'	||
             $scope.respuestas[i].cod == 	'51'	||
             $scope.respuestas[i].cod == 	'57'	||
             $scope.respuestas[i].cod == 	'59'	||
             $scope.respuestas[i].cod == 	'69'	||
             $scope.respuestas[i].cod == 	'80'	||
             $scope.respuestas[i].cod == 	'82'	||
             $scope.respuestas[i].cod == 	'88'	||
             $scope.respuestas[i].cod == 	'97'	||
             $scope.respuestas[i].cod == 	'104'	||
             $scope.respuestas[i].cod == 	'112'	||
             $scope.respuestas[i].cod == 	'123'	||
             $scope.respuestas[i].cod == 	'137'	||
             $scope.respuestas[i].cod == 	'141'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'151'	||
             $scope.respuestas[i].cod == 	'172'
             )
             {
                 $scope.DSocial = $scope.DSocial + $scope.respuestas[i].resp;
             }

             //Devaluación
             if($scope.respuestas[i].cod == 	'1'	||
             $scope.respuestas[i].cod == 	'4'	||
             $scope.respuestas[i].cod == 	'8'	||
             $scope.respuestas[i].cod == 	'15'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'24'	||
             $scope.respuestas[i].cod == 	'30'	||
             $scope.respuestas[i].cod == 	'34'	||
             $scope.respuestas[i].cod == 	'36'	||
             $scope.respuestas[i].cod == 	'44'	||
             $scope.respuestas[i].cod == 	'55'	||
             $scope.respuestas[i].cod == 	'56'	||
             $scope.respuestas[i].cod == 	'58'	||
             $scope.respuestas[i].cod == 	'62'	||
             $scope.respuestas[i].cod == 	'63'	||
             $scope.respuestas[i].cod == 	'70'	||
             $scope.respuestas[i].cod == 	'74'	||
             $scope.respuestas[i].cod == 	'75'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'84'	||
             $scope.respuestas[i].cod == 	'86'	||
             $scope.respuestas[i].cod == 	'99'	||
             $scope.respuestas[i].cod == 	'111'	||
             $scope.respuestas[i].cod == 	'123'	||
             $scope.respuestas[i].cod == 	'128'	||
             $scope.respuestas[i].cod == 	'133'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'145'	||
             $scope.respuestas[i].cod == 	'150'	||
             $scope.respuestas[i].cod == 	'171'
             )
             {
                 $scope.Devaluacion = $scope.Devaluacion + $scope.respuestas[i].resp;
             }

             //Validez

             if($scope.respuestas[i].cod == 	'65'	||
             $scope.respuestas[i].cod == 	'110'	||
             $scope.respuestas[i].cod == 	'157'
             )
             {
                 $scope.Validez = $scope.Validez + $scope.respuestas[i].resp;
             }






        }

        $scope.datos = [{ cod:'1',descrip:'Esquizoide', bruto : $scope.Esquizoide},
        { cod:'2A',descrip:'Evitativo', bruto : $scope.Evitativo},
        { cod:'2B',descrip:'Depresivo', bruto : $scope.Depresivo},
        { cod:'3',descrip:'Dependiente', bruto : $scope.Dependiente},
        { cod:'4',descrip:'Histriónico', bruto : $scope.Histrionico},
        { cod:'5',descrip:'Narcisita', bruto : $scope.Narcisita},
        { cod:'6A',descrip:'Antisocial', bruto : $scope.Antisocial},
        { cod:'6B',descrip:'Agresivo-sádico', bruto : $scope.Agresivo},
        { cod:'7',descrip:'Compulsivo', bruto : $scope.Compulsivo},
        { cod:'8A',descrip:'Negativista (pasivo-agresivo)', bruto : $scope.Negativista},
        { cod:'8B',descrip:'Autodestructiva', bruto : $scope.Autodestructiva},
        { cod:'S',descrip:'Esquizotípica', bruto : $scope.Esquizotipica},
        { cod:'C',descrip:'Límite', bruto : $scope.Limite},
        { cod:'P',descrip:'Paranoide', bruto : $scope.Paranoide},
        { cod:'A',descrip:'Trastornos de Ansiedad', bruto : $scope.TAnsiedad},
        { cod:'H',descrip:'Trastorno Somatoformo', bruto : $scope.TSomatoformo},
        { cod:'N',descrip:'Trastorno Bipolar', bruto : $scope.TBipolar},
        { cod:'D',descrip:'Trastorno Distímico', bruto : $scope.TDistimico},
        { cod:'B',descrip:'Dependencia del alcohol', bruto : $scope.Dalcohol},
        { cod:'T',descrip:'Dependencia de sustancias', bruto : $scope.Dsustancias},
        { cod:'R',descrip:'Trastorno estrés postraumático', bruto : $scope.Tpostraumatico},
        { cod:'SS',descrip:'Desorden del pensamiento', bruto : $scope.Dpensamiento},
        { cod:'CC',descrip:'Depresión mayor', bruto : $scope.Dmayor},
        { cod:'PP',descrip:'Desorden delusional', bruto : $scope.Ddelusional},
        { cod:'X',descrip:'Sinceridad', bruto : $scope.Sinceridad},
        { cod:'Y',descrip:'Deseabilidad Social', bruto : $scope.DSocial},
        { cod:'Z',descrip:'Devaluación', bruto : $scope.Devaluacion},
        { cod:'V',descrip:'Validez', bruto : $scope.Validez}];

        $scope.prev = [];
        var t = 0;


        for (i = 0; i < $scope.datos.length; i++  )
        {

            if($scope.datos[i].cod != 'X' && $scope.datos[i].cod != 'V')
            {

                $http({
                    method: 'GET',
                    url: "php/buscarPREV.php",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    params: {
                        pd:$scope.datos[i].bruto,
                        cod:$scope.datos[i].cod,
                        genero: $scope.datosTestFormTotal.generoT
                    }
                }).then(function successCallback(response) {



                   $scope.prev.push(response.data[0])
                   console.log(response.data[0]);



                }, function errorCallback(response) {

                    swal("Error!", "Ocurrio un error!", "error");


                 });




            }
            if ($scope.datos[i].cod == 'X') {

                    $scope.datos[i].br = $scope.datos[i].bruto;


            }
            if($scope.datos[i].cod == 'V'){

                    $scope.datos[i].br = $scope.datos[i].bruto;

            }

        }


        setTimeout(function(){


                for(i=0;i < $scope.datos.length; i++)
                {

                    for(j=0;j < $scope.prev.length; j++)
                    {

                        if($scope.prev[j][$scope.datos[i].cod] != undefined)
                        {
                            $scope.datos[i].br = parseInt($scope.prev[j][$scope.datos[i].cod]);
                            $scope.datos[i].cedula = $scope.id;


                        }


                    }
                    //funcion que registra los resultados.
                    $scope.registrarDatosResultado($scope.datos[i]);

                }
                window.localStorage["resultadosTotal"]= JSON.stringify($scope.datos);
                $scope.navegacion ("/resultado");

            //console.log($scope.datos);
        }, 5000);





    }

    /*$scope.siguiente= function()
    {
        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'))
        console.log($scope.usuarioLogin);
    }*/

    $scope.buscarIdTest=function(){

        $http({
            method: 'GET',
            url: "php/buscaridTest.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {

            }
        }).then(function successCallback(response) {

            $scope.id = response.data[0].ID_TEST;
           // console.log($scope.id);


        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");


         });


    }

    $scope.initDatosTest=function(){
        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'));
       // console.log($scope.usuarioLogin);
       $scope.nickT = $scope.usuarioLogin.NICK;
        $scope.cedulaT='';
        $scope.generoT='';
        $scope.edadT=18;
        $scope.nombreT = $scope.usuarioLogin.NOMBRES + ' ' + $scope.usuarioLogin.APELLIDOS;
        $scope.ocupacionT='';
        $scope.gradoT='';
    }

    $scope.registrarDatosResultado=function(data){
        //console.log(data);

        $http({
            method: 'GET',
            url: "php/registrarResultados.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                id_test:$scope.id,
                codigo_prev: data.cod,
                descripcion:data.descrip,
                bruto:data.bruto,
                br: data.br

            }
        }).then(function successCallback(response) {


                console.log(response.data);

        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");


         });

    }

    $scope.restarNumT=function(){

        console.log($scope.datosTestForm.nickT);
        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'))

        if($scope.usuarioLogin.COD_TIPO == 1)
        {
            $http({
                method: 'GET',
                url: "php/restarNumTest.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    nick : $scope.datosTestForm.nickT
                }
            }).then(function successCallback(response) {

                console.log(response.data);

            }, function errorCallback(response) {

                swal("Error!", "No se resto el numero de test", "error");

             });
        }


    }

    $scope.registrarDatosTest=function(){

        var f = new Date();

        $http({
            method: 'GET',
            url: "php/registrarDatosTest.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                nick:$scope.datosTestForm.nickT,
                nombre:$scope.datosTestForm.nombreT,
                cedula:$scope.datosTestForm.cedulaT,
                genero: $scope.datosTestForm.generoT,
                edad:$scope.datosTestForm.edadT,
                tiempo_enfe:$scope.datosTestForm.enferT,
                fecha: $scope.datosTestForm.fecha

            }
        }).then(function successCallback(response) {

            if(response.data.resp == "true")
            {
                //swal("Success!", "Se ingreso correctamente!", "success");
                console.log(response.data);
                $scope.buscarIdTest();
                $scope.restarNumT();


            }else{
                console.log(response.data);
                swal("Error!", "No se ingreso!", "error");
                setTimeout(function(){

                    $scope.navegacion ("/test");

                //console.log($scope.datos);
                }, 500);

            }




        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");


         });

    }


    $scope.initTest=function(){


        localStorage.removeItem('flag');
        console.log($scope.usuarioLogin.NICK);

        if($scope.usuarioLogin.COD_TIPO == 2)
        {
            $http({
                method: 'GET',
                url: "php/allTest.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {

                }
            }).then(function successCallback(response) {

                 $scope.alltest = response.data;
                console.log($scope.alltest);

            }, function errorCallback(response) {

                swal("Error!", "No existen registros!", "error");


             });

        setTimeout(function(){
                $('#datatabletest').DataTable({
                    "language": {
                        "url": "http://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
                    }
                });
            }, 500);

        }else{
            $http({
                method: 'GET',
                url: "php/allTestId.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    nick : $scope.usuarioLogin.NICK
                }
            }).then(function successCallback(response) {

                 $scope.alltest = response.data;
                 console.log($scope.alltest);

            }, function errorCallback(response) {

                swal("Error!", "No existen registros!", "error");


             });

        setTimeout(function(){
                $('#datatabletest').DataTable({
                    "language": {
                        "url": "http://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
                    }
                });
            }, 500);
        }


    }


     $scope.initPreguntas=function(){


        $scope.datosTestForm = JSON.parse(window.localStorage.getItem('datosTestForm'))
        console.log($scope.datosTestForm );

        $http({
            method: 'GET',
            url: "php/allPreguntas.php",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {

            }
        }).then(function successCallback(response) {

             $scope.allPreguntas = response.data;


        }, function errorCallback(response) {

            swal("Error!", "No existen registros!", "error");


         });

     }

     $scope.inhabilitarUsuario=function(){
        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'));
        console.log($scope.usuarioLogin);

        $http({
            method: 'GET',
            url: "php/inhabilitarUsuario.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                nick : $scope.usuarioLogin.NICK
            }
        }).then(function successCallback(response) {

            console.log(response.data);

        }, function errorCallback(response) {

            swal("Error!", "No se resto el numero de test", "error");

         });
    }

    $scope.siguiente1=function(){
        $scope.navegacion ("/testForm");
    }

        $scope.siguiente=function(){

        var f = new Date();
        window.localStorage["datosTestForm"]= JSON.stringify({nickT:$scope.nickT,
            cedulaT:$scope.cedulaT,
            nombreT:$scope.nombreT,
            generoT:$scope.generoT,
            edadT: $scope.edadT,
            ocupacion:$scope.ocupacionT,
            grado:$scope.gradoT,
            fecha:f.getFullYear()+'-'+(f.getMonth()+1)+'-'+f.getDate()+' '+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()});

            $http({
                method: 'GET',
                url: "php/buscarUsuario.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    nick : $scope.nickT
                }
            }).then(function successCallback(response) {
                console.log(response.data.length);
                if (response.data.length == 1)
                {
                    if(parseInt(response.data[0].NUM_PRUEBAS) >= 1)
                    {
                        $scope.navegacion ("/instrucciones");
                    }else{
                        $scope.inhabilitarUsuario();
                        swal("Warning!", "El usuario se encuenta deshabilitado, solicite al administrador que lo active!", "warning");
                    }
                }

            }, function errorCallback(response) {

                swal("Error!", "Al conultar usuario", "error");

             });

    }


    $scope.buscarTest=function(){

        $http({
            method: 'GET',
            url: "php/buscarTest.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {

            }
        }).then(function successCallback(response) {

            $scope.id = response.data[0].ID_TEST;
           // console.log($scope.id);


        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");


         });

    }

    $scope.verTest=function(test){

        $scope.test = test;
        $scope.flag = 1;
        window.localStorage["flag"]= JSON.stringify($scope.flag);
        console.log($scope.test);
        console.log($scope.test.ID_TEST);

            $http({
                method: 'GET',
                url: "php/verResultado.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    idtest :  $scope.test.ID_TEST
                }
            }).then(function successCallback(response) {


                console.log(response.data[0]);
                window.localStorage["resultadosTotal"]= JSON.stringify(response.data);
                window.localStorage["datosTestForm"]= JSON.stringify($scope.test);
                $scope.navegacion ("/resultado");




            }, function errorCallback(response) {

                swal("Error!", "Ocurrio un error!", "error");


             });




    }

    $scope.imprimir=function(){
        var doc = new jsPDF();
var elementHTML = $('#content').html();
var specialElementHandlers = {
    '#elementH': function (element, renderer) {
        return true;
    }
};
doc.fromHTML(elementHTML, 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
});

// Save the PDF
doc.save('sample-document.pdf');
    }



    $scope.initResultado=function(){

        $("#miTexto").focus();


        $scope.datosTestFormTotal = JSON.parse(window.localStorage.getItem('datosTestForm'))
        console.log($scope.datosTestFormTotal);


        $scope.resultadosTotal = JSON.parse(window.localStorage.getItem('resultadosTotal'))
        console.log($scope.resultadosTotal);
        $scope.flag = JSON.parse(window.localStorage.getItem('flag'))
        console.log($scope.flag);

        if($scope.flag == 1)
        {
            $scope.shore = {
                nombreT : $scope.datosTestFormTotal.NOMBRE,
                enferT : $scope.datosTestFormTotal.TIEMPO_ENFERMEDAD,
                edadT : $scope.datosTestFormTotal.EDAD
            }
            $scope.datosTestFormTotal = $scope.shore;
            console.log($scope.datosTestFormTotal);
        }

        $scope.variables=[28];

        for (i=0; i<$scope.resultadosTotal.length;i++)
        {
            console.log("Dentro");
                if($scope.resultadosTotal[i].cod == '1')
                {
                    $scope.variables[0]= $scope.resultadosTotal[i]
                    console.log($scope.resultadosTotal[i].cod );
                    console.log("Posicion"+ i)
                }
                if($scope.resultadosTotal[i].cod == '2A')
                {
                    $scope.variables[1]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '2B')
                {
                    $scope.variables[2]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '3')
                {
                    $scope.variables[3]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '4')
                {
                    $scope.variables[4]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod =='5')
                {
                    $scope.variables[5]= $scope.resultadosTotal[i];
                    console.log($scope.variables[5]);
                }
                if($scope.resultadosTotal[i].cod == '6A')
                {
                    $scope.variables[6]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '6B')
                {
                    $scope.variables[7]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '7')
                {
                    $scope.variables[8]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '8A')
                {
                    $scope.variables[9]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '8B')
                {
                    $scope.variables[10]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'S')
                {
                    $scope.variables[11]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'C')
                {
                    $scope.variables[12]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'P')
                {
                    $scope.variables[13]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'A')
                {
                    $scope.variables[14]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'H')
                {
                    $scope.variables[15]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'N')
                {
                    $scope.variables[16]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'D')
                {
                    $scope.variables[17]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'B')
                {
                    $scope.variables[18]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'T')
                {
                    $scope.variables[19]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'R')
                {
                    $scope.variables[20]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'SS')
                {
                    $scope.variables[21]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'CC')
                {
                    $scope.variables[22]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'PP')
                {
                    $scope.variables[23]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'X')
                {
                    $scope.variables[24]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'Y')
                {
                    $scope.variables[25]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'Z')
                {
                    $scope.variables[26]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'V')
                {
                    $scope.variables[27]= $scope.resultadosTotal[i];
                }

        }

        console.log( $scope.variables);


            var bar_data = {
              data : [['Esquizoide', $scope.variables[0].br], ['Evitativo', $scope.variables[1].br], ['Depresivo', $scope.variables[2].br], ['Dependiente', $scope.variables[3].br], ['Histriónico', $scope.variables[4].br],
              ['Narcisita', $scope.variables[5].br], ['Antisocial', $scope.variables[6].br], ['Agresivo-sádico', $scope.variables[7].br], ['Compulsivo', $scope.variables[8].br], ['Negativista (pasivo-agresivo)', $scope.variables[9].br], ['Autodestructiva', $scope.variables[10].br]],
              color: '#3c8dbc'
            }
            $.plot('#bar-chart1', [bar_data], {
              grid  : {
                borderWidth: 1,
                borderColor: '#f3f3f3',
                tickColor  : '#f3f3f3',

              },
              series: {
                bars: {
                  show    : true,
                  barWidth: 0.5,
                  align   : 'center'
                }
              },
              xaxis : {
                mode      : 'categories',
                tickLength: 0
              }
            })
            /* END BAR CHART */
            var bar_data = {
              data : [['Esquizotípica', $scope.variables[11].br], ['Límite', $scope.variables[12].br],
              ['Paranoide', $scope.variables[13].br]],
              color: '#3c8dbc'
            }
            $.plot('#bar-chart2', [bar_data], {
              grid  : {
                borderWidth: 1,
                borderColor: '#f3f3f3',
                tickColor  : '#f3f3f3'
              },
              series: {
                bars: {
                  show    : true,
                  barWidth: 0.5,
                  align   : 'center'
                }
              },
              xaxis : {
                mode      : 'categories',
                tickLength: 0
              }
            })
            /* END BAR CHART */
            var bar_data = {
              data : [['Trastornos de Ansiedad', $scope.variables[14].br], ['Trastorno Somatoformo', $scope.variables[15].br], ['Trastorno Bipolar',$scope.variables[16].br],
              ['Trastorno Distímico', $scope.variables[17].br], ['Dependencia del alcohol', $scope.variables[18].br], ['Dependencia de sustancias', $scope.variables[19].br],
              ['Trastorno estrés postraumático', $scope.variables[20].br]],
              color: '#3c8dbc'
            }
            $.plot('#bar-chart3', [bar_data], {
              grid  : {
                borderWidth: 1,
                borderColor: '#f3f3f3',
                tickColor  : '#f3f3f3'
              },
              series: {
                bars: {
                  show    : true,
                  barWidth: 0.5,
                  align   : 'center'
                }
              },
              xaxis : {
                mode      : 'categories',
                tickLength: 0
              }
            })
            /* END BAR CHART */
            var bar_data = {
              data : [['Desorden del pensamiento', $scope.variables[21].br], ['Depresión mayor', $scope.variables[22].br], ['Desorden delusional', $scope.variables[23].br]],
              color: '#3c8dbc'
            }
            $.plot('#bar-chart4', [bar_data], {
              grid  : {
                borderWidth: 1,
                borderColor: '#f3f3f3',
                tickColor  : '#f3f3f3'
              },
              series: {
                bars: {
                  show    : true,
                  barWidth: 0.5,
                  align   : 'center'
                }
              },
              xaxis : {
                mode      : 'categories',
                tickLength: 0
              }
            })
            /* END BAR CHART */
            var bar_data = {
                data : [['Sinceridad', $scope.variables[24].br], ['Deseabilidad Social', $scope.variables[25].br],
                ['Devaluación', $scope.variables[26].br], ['Validez', $scope.variables[23].br]],
                color: '#3c8dbc'
              }
              $.plot('#bar-chart5', [bar_data], {
                grid  : {
                  borderWidth: 1,
                  borderColor: '#f3f3f3',
                  tickColor  : '#f3f3f3'
                },
                series: {
                  bars: {
                    show    : true,
                    barWidth: 0.5,
                    align   : 'center'
                  }
                },
                xaxis : {
                  mode      : 'categories',
                  tickLength: 0
                }
              })
              /* END BAR CHART */

    }

}]);
