app.controller('testController', ['$scope', '$http', '$location','$localStorage','$timeout',  function ($scope,$http,$location,myProvider,$localStorage,$timeout) {

    $scope.terminar=function(){

        $('#bt').prop('disabled', true);
        $('#1').prop('disabled', true);
       // $scope.navegacion ("/testForm");
       $scope.datosTestFormTotal = JSON.parse(window.localStorage.getItem('datosTestForm'))
       console.log($scope.datosTestFormTotal);
       //PASO 1
       $scope.registrarDatosTest();

    }

    $scope.calculos = function (){
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
        $scope.Perseverancia.push($scope.Perseverancia[3] + 36);
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
        $scope.arrayResults1.push(
            {"id":10, "value": 27}
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

        // BAJO MEDIO ALTO
        $scope.arrayNivel = [];
        $scope.arrayNivel.push(
            {"id":0,"value":"Bajo"}
            ,{"id":1,"value":"Bajo"}
            ,{"id":2,"value":"Bajo"}
            ,{"id":3,"value":"Bajo"}
            ,{"id":4,"value":"Bajo"}
            ,{"id":5,"value":"Bajo"}
            ,{"id":6,"value":"Bajo"}
            ,{"id":7,"value":"Bajo"}
            ,{"id":8,"value":"Bajo"}
            ,{"id":9,"value":"Bajo"}
            ,{"id":10,"value":"Bajo"}
            ,{"id":11,"value":"Bajo"}
            ,{"id":12,"value":"Bajo"}
            ,{"id":13,"value":"Bajo"}
            ,{"id":14,"value":"Bajo"}
            ,{"id":15,"value":"Bajo"}
            ,{"id":16,"value":"Bajo"}
            ,{"id":17,"value":"Bajo"}
            ,{"id":18,"value":"Bajo"}
            ,{"id":19,"value":"Bajo"}
            ,{"id":20,"value":"Bajo"}
            ,{"id":21,"value":"Bajo"}
            ,{"id":22,"value":"Bajo"}
            ,{"id":23,"value":"Bajo"}
            ,{"id":24,"value":"Bajo"}
            ,{"id":25,"value":"Bajo"}
            ,{"id":26,"value":"Bajo"}
            ,{"id":27,"value":"Bajo"}
            ,{"id":28,"value":"Bajo"}
            ,{"id":29,"value":"Bajo"}
            ,{"id":30,"value":"Bajo"}
            ,{"id":31,"value":"Bajo"}
            ,{"id":32,"value":"Bajo"}
            ,{"id":33,"value":"Bajo"}
            ,{"id":34,"value":"Bajo"}
            ,{"id":35,"value":"Bajo"}
            ,{"id":36,"value":"Bajo"}
            ,{"id":37,"value":"Bajo"}
            ,{"id":38,"value":"Bajo"}
            ,{"id":39,"value":"Bajo"}
            ,{"id":40,"value":"Bajo"}
            ,{"id":41,"value":"Bajo"}
            ,{"id":42,"value":"Bajo"}
            ,{"id":43,"value":"Bajo"}
            ,{"id":44,"value":"Bajo"}
            ,{"id":45,"value":"Promedio"}
            ,{"id":46,"value":"Promedio"}
            ,{"id":47,"value":"Promedio"}
            ,{"id":48,"value":"Promedio"}
            ,{"id":49,"value":"Promedio"}
            ,{"id":50,"value":"Promedio"}
            ,{"id":51,"value":"Promedio"}
            ,{"id":52,"value":"Promedio"}
            ,{"id":53,"value":"Promedio"}
            ,{"id":54,"value":"Promedio"}
            ,{"id":55,"value":"Alto"}
            ,{"id":56,"value":"Alto"}
            ,{"id":57,"value":"Alto"}
            ,{"id":58,"value":"Alto"}
            ,{"id":59,"value":"Alto"}
            ,{"id":60,"value":"Alto"}
            ,{"id":61,"value":"Alto"}
            ,{"id":62,"value":"Alto"}
            ,{"id":63,"value":"Alto"}
            ,{"id":64,"value":"Alto"}
            ,{"id":65,"value":"Alto"}
            ,{"id":66,"value":"Alto"}
            ,{"id":67,"value":"Alto"}
            ,{"id":68,"value":"Alto"}
            ,{"id":69,"value":"Alto"}
            ,{"id":70,"value":"Alto"}
            ,{"id":71,"value":"Alto"}
            ,{"id":72,"value":"Alto"}
            ,{"id":73,"value":"Alto"}
            ,{"id":74,"value":"Alto"}
            ,{"id":75,"value":"Alto"}
            ,{"id":76,"value":"Alto"}
            ,{"id":77,"value":"Alto"}
            ,{"id":78,"value":"Alto"}
            ,{"id":79,"value":"Alto"}
            ,{"id":80,"value":"Alto"}
            ,{"id":81,"value":"Alto"}
            ,{"id":82,"value":"Alto"}
            ,{"id":83,"value":"Alto"}
            ,{"id":84,"value":"Alto"}
            ,{"id":85,"value":"Alto"}
            ,{"id":86,"value":"Alto"}
            ,{"id":87,"value":"Alto"}
            ,{"id":88,"value":"Alto"}
            ,{"id":89,"value":"Alto"}
            ,{"id":90,"value":"Alto"}
            ,{"id":91,"value":"Alto"}
            ,{"id":92,"value":"Alto"}
            ,{"id":93,"value":"Alto"}
            ,{"id":94,"value":"Alto"}
            ,{"id":95,"value":"Alto"}
            ,{"id":96,"value":"Alto"}
            ,{"id":97,"value":"Alto"}
            ,{"id":98,"value":"Alto"}
            ,{"id":99,"value":"Alto"}
            ,{"id":100,"value":"Alto"}
            ,{"id":101,"value":"Alto"}
            ,{"id":102,"value":"Alto"}
            ,{"id":103,"value":"Alto"}
            ,{"id":104,"value":"Alto"}
            ,{"id":105,"value":"Alto"});

        //TEXTOS
        $scope.textos = [];
        $scope.textos.push(
            {"id":1,
                "cod": "Alto",
                "val1": "Muy Dinámica, activa, enérgica, dominante y locuaz.",
                "val2": "Muy cooperativa, cordial, altruista, amigable, generosa y empática.",
                "val3": "Muy reflexiva y escrupulosa,  ordenada, diligente y perseverante.",
                "val4": "Poco ansiosa, vulnerable, emotiva, impulsiva, impaciente e  irritable",
                "val5": "Muy culta, informada, interesada por las cosas y experiencias nuevas, dispuesta al contacto con culturas y costumbres distintas."},
            {"id":2,
                "cod": "Promedio",
                "val1": "En oportunidades algo dinámica, medianamente activa, algo sumisa y taciturna.",
                "val2": "Medianamente  cooperativa, cordial, altruista,  amigable, generosa y  empática.",
                "val3": "Medianamente reflexiva, escrupulosa,  ordenada,  diligente y perseverante.",
                "val4": "Algo ansiosa, vulnerable, emotiva, impulsiva,  impaciente, e irritable",
                "val5": "Medianamente culta, informada e interesada por las cosas y experiencias nuevas,  y algo refractaria al contacto con culturas y costumbres distintas."},
            {"id":3,
                "cod": "Bajo",
                "val1": "Poco dinámica, poco activa, sumisa y taciturna.",
                "val2": "Poco cooperativa, cordial, altruista,  amigable, generosa y  empática.",
                "val3": "Poco reflexiva, escrupulosa,  ordenada,  diligente y perseverante.",
                "val4": "Muy ansiosa, vulnerable, emotiva, impulsiva,  impaciente, e irritable",
                "val5": "Poco culta, poco informada e interesada por las cosas y experiencias nuevas,  y refractaria al contacto con culturas y costumbres distintas."
            });

        console.log($scope.textos);


        $scope.cat1 = $scope.arrayNivel.filter(obj => obj.id == $scope.Dinamismo[6])[0].value;
        $scope.cat2 = $scope.arrayNivel.filter(obj => obj.id == $scope.Dominancia[6])[0].value;
        $scope.cat3 = $scope.arrayNivel.filter(obj => obj.id == $scope.Cooperacion_Empatia[6])[0].value;
        $scope.cat4 = $scope.arrayNivel.filter(obj => obj.id == $scope.Cordialidad_Amabilidad[6])[0].value;
        $scope.cat5 = $scope.arrayNivel.filter(obj => obj.id == $scope.Escrupulosidad[6])[0].value;
        $scope.cat6 = $scope.arrayNivel.filter(obj => obj.id == $scope.Perseverancia[7])[0].value;
        console.log($scope.cat1,$scope.cat2,$scope.cat3,$scope.cat4,$scope.cat5,$scope.cat6);

        $scope.text1 = $scope.textos.filter(obj => obj.cod == $scope.cat1)[0].val1;
        $scope.text2 = $scope.textos.filter(obj => obj.cod == $scope.cat2)[0].val2;
        $scope.text3 = $scope.textos.filter(obj => obj.cod == $scope.cat3)[0].val3;
        $scope.text4 = $scope.textos.filter(obj => obj.cod == $scope.cat4)[0].val4;
        $scope.text5 = $scope.textos.filter(obj => obj.cod == $scope.cat5)[0].val5;

        console.log($scope.text1,$scope.text2,$scope.text3,$scope.text4,$scope.text5,$scope.text6);

        $scope.resultado = [
            {
                "dimension": "Energía (E)",
                "subescala1": $scope.Dinamismo[0],
                "val1": $scope.Dinamismo[4],
                "subescala2": $scope.Dominancia[0],
                "val2": $scope.Dominancia[4],
                "total": $scope.Dinamismo[6],
                "categoria": $scope.cat1,
                "texto": $scope.text1
            },
            {
                "dimension": "Afabilidad (A)",
                "subescala1": $scope.Cooperacion_Empatia[0],
                "val1": $scope.Cooperacion_Empatia[4],
                "subescala2": $scope.Cordialidad_Amabilidad[0],
                "val2": $scope.Cordialidad_Amabilidad[4],
                "total": $scope.Dominancia[6],
                "categoria": $scope.cat2,
                "texto": $scope.text2
            },
            {
                "dimension": "Tesón (T)",
                "subescala1": $scope.Escrupulosidad[0],
                "val1": $scope.Escrupulosidad[4],
                "subescala2": $scope.Perseverancia[0],
                "val2": $scope.Perseverancia[4],
                "total": $scope.Cooperacion_Empatia[6],
                "categoria": $scope.cat3,
                "texto": $scope.text3
            },
            {
                "dimension": "Estabilidad Emocional (EE)",
                "subescala1": $scope.Control_de_emociones[0],
                "val1": $scope.Control_de_emociones[4],
                "subescala2": $scope.Control_de_impulsos[0],
                "val2": $scope.Control_de_impulsos[4],
                "total": $scope.Cordialidad_Amabilidad[6],
                "categoria": $scope.cat4,
                "texto": $scope.text4
            },
            {
                "dimension": "Apertura Mental (AM) ",
                "subescala1": $scope.Apertura_a_la_cultura[0],
                "val1": $scope.Apertura_a_la_cultura[4],
                "subescala2": $scope.Apertura_a_la_experiencia[0],
                "val2": $scope.Apertura_a_la_experiencia[4],
                "total": $scope.Escrupulosidad[6],
                "categoria": $scope.cat5,
                "texto": $scope.text5
            },
            {
                "dimension": "Factor de Distorsión",
                "subescala1": '',
                "val1": $scope.Distorsion[4],
                "subescala2": '',
                "val2": 0,
                "total": $scope.Perseverancia[7],
                "categoria": $scope.cat6,
                "texto": ''
            }
        ];
        console.log($scope.resultado);

        setTimeout(function(){


            for(i=0;i < $scope.resultado.length; i++)
            {

                //funcion que registra los resultados.
                //PASO4
                $scope.registrarDatosResultado($scope.resultado[i],i);

            }
            window.localStorage["resultadosTotal"]= JSON.stringify($scope.resultado);
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
            url: "php/buscarIdTest.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {

            }
        }).then(function successCallback(response) {

            $scope.id = response.data[0].ID_TEST;

            // PASO 3
            $scope.calculos();


        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");


         });


    }

    $scope.initDatosTest=function(){
        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'));
       // console.log($scope.usuarioLogin);
       $scope.nickT = $scope.usuarioLogin.NICK;
        $scope.generoT='';
        $scope.edadT=18;
        $scope.nombreT ='';
        $scope.ocupacionT='';
        $scope.gradoT='';
        if($scope.usuarioLogin.COD_TIPO == 1){
            $scope.cedulaT=$scope.usuarioLogin.NICK;
            $scope.nombreT =$scope.usuarioLogin.NOMBRES +" "+ $scope.usuarioLogin.APELLIDOS;
        }

    }

    $scope.registrarDatosResultado=function(data,i){
        //console.log(data);

        $http({
            method: 'GET',
            url: "php/registrarResultados.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                id_test:$scope.id,
                dimension: data.dimension,
                subescala1:data.subescala1,
                val1:data.val1,
                subescala2: data.subescala2,
                val2: data.val2,
                total:data.total,
                categoria:data.categoria,
                texto:data.texto,
                pos:i
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
                grado:$scope.datosTestForm.grado,
                fecha: $scope.datosTestForm.fecha,
                ocupacion: $scope.datosTestForm.ocupacion

            }
        }).then(function successCallback(response) {

            if(response.data.resp == "true")
            {
                //swal("Success!", "Se ingreso correctamente!", "success");
                console.log(response.data);
                //PASO2
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
                        swal("Warning!", "El usuario llego al limite de test permitidos, solicite al administrador que habilitar el test!", "warning");
                    }
                }

            }, function errorCallback(response) {

                swal("Error!", "Al consultar usuario", "error");

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
                fecha : $scope.datosTestFormTotal.FECHA,
                edadT : $scope.datosTestFormTotal.EDAD,
                generoT : $scope.datosTestFormTotal.GENERO,
                grado : $scope.datosTestFormTotal.GRADO,
                ocupacion : $scope.datosTestFormTotal.OCUPACION
            }
            $scope.datosTestFormTotal = $scope.shore;
            console.log($scope.datosTestFormTotal);
        }

        $scope.variables=[6];

        for (i=0; i<$scope.resultadosTotal.length;i++)
        {
                    $scope.variables[i]= $scope.resultadosTotal[i].total;
        }

        console.log( $scope.variables);


            var bar_data = {
              data : [['Energia '+'('+  $scope.variables[0]+')', $scope.variables[0]], ['Afabilidad '+'('+  $scope.variables[1]+')', $scope.variables[1]],
                  ['Teson '+'('+  $scope.variables[2]+')', $scope.variables[2]], ['Est. Emoc. '+'('+  $scope.variables[3]+')', $scope.variables[3]],
                  ['Ap. Mental '+'('+  $scope.variables[4]+')', $scope.variables[4]], ['Dist. '+'('+  $scope.variables[5]+')', $scope.variables[5]]],
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

    }

}]);
