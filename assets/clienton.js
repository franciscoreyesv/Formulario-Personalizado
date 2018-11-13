//este script controla los campos cuando se modifican en tiempo real
//CASO CLIENT.ON
function hide_fields_default(client){
    client.invoke('ticketFields:custom_field_360007322854.hide');
    client.invoke('ticketFields:custom_field_360007322934.hide');
    client.invoke('ticketFields:custom_field_360007322994.hide');
    client.invoke('ticketFields:custom_field_360007246813.hide');
    client.invoke('ticketFields:custom_field_360007325014.hide');
    client.invoke('ticketFields:custom_field_360007322954.hide');
    client.invoke('ticketFields:custom_field_360007244873.hide');
    client.invoke('ticketFields:custom_field_360007322974.hide');
    client.invoke('ticketFields:custom_field_360007244893.hide');
    client.invoke('ticketFields:custom_field_360007244913.hide');
    client.invoke('ticketFields:custom_field_360007324834.hide');
    client.invoke('ticketFields:custom_field_360007324814.hide');
    client.invoke('ticketFields:custom_field_360007323094.hide');
    client.invoke('ticketFields:custom_field_360007245213.hide');
    client.invoke('ticketFields:custom_field_360007322794.hide');
    client.invoke('ticketFields:custom_field_360007244833.hide');
    client.invoke('ticketFields:custom_field_360007324794.hide');
    client.invoke('ticketFields:custom_field_360007246593.hide');
    client.invoke('ticketFields:custom_field_360007323074.hide');
    client.invoke('ticketFields:custom_field_360007323014.hide');
    client.invoke('ticketFields:custom_field_360007244953.hide');
    client.invoke('ticketFields:custom_field_360007246833.hide');
    client.invoke('ticketFields:custom_field_360007325074.hide');
    client.invoke('ticketFields:custom_field_360007325094.hide');
    client.invoke('ticketFields:custom_field_360007325054.hide');
    client.invoke('ticketFields:custom_field_360007325134.hide');
    client.invoke('ticketFields:custom_field_360007246853.hide');
    client.invoke('ticketFields:custom_field_360007325154.hide');
    client.invoke('ticketFields:custom_field_360008322733.hide');
    client.invoke('ticketFields:custom_field_360007245233.hide');


    //client.invoke('ticketFields:custom_field_360007323094.hide');
}

function hide_items_one(v){
    switch(v){
          case "impresion_de_carnet":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.hide');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "inclusion_programa_fyel":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007323014.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "reactivacion_de_autorizaciones_no_realizada_sac":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "autorizacion_medicamentos_uso_continuo":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "recibo_pago_planes_alternativos":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "reembolso":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007244913.show');
              client.invoke('ticketFields:custom_field_360007322974.show');
              client.invoke('ticketFields:custom_field_360007322994.show');
              client.invoke('ticketFields:custom_field_360007244953.show');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              //client.invoke('ticketFields:custom_field_360007322974.hide');
          break;
          case "carta_de_agoto_de_cobertura":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "carta_de_cobertura":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "reverso_a_la_sisalril":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "cobertura_disponible_en_farmacia":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "cambios_en_autorización_con_materiales_de_osteosintesis":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007244913.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');  
          break;
          case "cotizacion_de_planes":
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322854.hide');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "carta_de_ayudas":
              client.invoke('ticketFields:custom_field_360007322854.show');
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case "Estatus traspaso":
              client.invoke('ticketFields:custom_field_360007322934.show');
              client.invoke('ticketFields:custom_field_360007322854.hide');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
          break;
          case null:
              client.invoke('ticketFields:custom_field_360007322934.hide');
              client.invoke('ticketFields:custom_field_360007322854.hide');
              client.invoke('ticketFields:custom_field_360007322974.hide');
              client.invoke('ticketFields:custom_field_360007323014.hide');
              client.invoke('ticketFields:custom_field_360007244953.hide');
      }//end switch
}

function hide_items_two(d){
    switch(d){
        case "cirugias":
            client.invoke('ticketFields:custom_field_360007322854.show');
            client.invoke('ticketFields:custom_field_360007322934.show');
            client.invoke('ticketFields:custom_field_360007322954.show');
            client.invoke('ticketFields:custom_field_360007246593.show');
            client.invoke('ticketFields:custom_field_360007324794.show');
            //client.invoke('ticketFields:custom_field_360007244873.show');
            client.invoke('ticketFields:custom_field_360007322974.show');
            client.invoke('ticketFields:custom_field_360007244893.show');
            client.invoke('ticketFields:custom_field_360007244913.show');
            client.invoke('ticketFields:custom_field_360007323074.show');
            client.invoke('ticketFields:custom_field_360007323094.show');
            client.invoke('ticketFields:custom_field_360007244833.show');
            client.invoke('ticketFields:custom_field_360007322994.hide');
            client.invoke('ticketFields:custom_field_360007246813.hide');
            client.invoke('ticketFields:custom_field_360007325014.hide');
           // client.invoke('ticketFields:custom_field_360007324834.hide');
           // client.invoke('ticketFields:custom_field_360007324814.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
            client.invoke('ticketFields:custom_field_360007245233.hide');
        break;
        case "material_de_osteosintesis":
            client.invoke('ticketFields:custom_field_360007322854.show');
            client.invoke('ticketFields:custom_field_360007322934.show');
           // client.invoke('ticketFields:custom_field_360007244873.show');
            client.invoke('ticketFields:custom_field_360007322974.show');
            client.invoke('ticketFields:custom_field_360007322954.show');
            client.invoke('ticketFields:custom_field_360007244893.show');
            client.invoke('ticketFields:custom_field_360007244913.show');
            client.invoke('ticketFields:custom_field_360007246593.show');
            client.invoke('ticketFields:custom_field_360007244833.show');
            client.invoke('ticketFields:custom_field_360007324794.show');
            client.invoke('ticketFields:custom_field_360007322994.hide');
            client.invoke('ticketFields:custom_field_360007325014.hide');
            client.invoke('ticketFields:custom_field_360007246813.hide');
            client.invoke('ticketFields:custom_field_360007323094.hide');
            //client.invoke('ticketFields:custom_field_360007324834.hide');
           // client.invoke('ticketFields:custom_field_360007324814.hide');
            client.invoke('ticketFields:custom_field_360007323074.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
            client.invoke('ticketFields:custom_field_360007245233.hide');
            break;
        case "alto_costo":
            client.invoke('ticketFields:custom_field_360007245213.show');
            client.invoke('ticketFields:custom_field_360007322854.show');
            client.invoke('ticketFields:custom_field_360007322934.show');
            client.invoke('ticketFields:custom_field_360007322954.show');
            client.invoke('ticketFields:custom_field_360007322974.show');
            client.invoke('ticketFields:custom_field_360007325014.show');
            client.invoke('ticketFields:custom_field_360007322994.show');
            client.invoke('ticketFields:custom_field_360007246813.show');
            client.invoke('ticketFields:custom_field_360007244893.show');
            client.invoke('ticketFields:custom_field_360007244913.show');
            client.invoke('ticketFields:custom_field_360007246593.show');
            client.invoke('ticketFields:custom_field_360007244833.show');
            client.invoke('ticketFields:custom_field_360007324794.show');
            client.invoke('ticketFields:custom_field_360007244873.hide');
            client.invoke('ticketFields:custom_field_360007323094.hide');
            //client.invoke('ticketFields:custom_field_360007324834.hide');
            //client.invoke('ticketFields:custom_field_360007324814.hide');
            client.invoke('ticketFields:custom_field_360007323074.hide');
            client.invoke('ticketFields:custom_field_360007245233.hide');
        break;
        case "estudios_especiales":
            client.invoke('ticketFields:custom_field_360007322854.show');
            client.invoke('ticketFields:custom_field_360007245233.show');
            client.invoke('ticketFields:custom_field_360007322934.show');
            client.invoke('ticketFields:custom_field_360007322974.show');
            client.invoke('ticketFields:custom_field_360007322994.show');
            client.invoke('ticketFields:custom_field_360007244893.show');
            client.invoke('ticketFields:custom_field_360007246593.show');
            client.invoke('ticketFields:custom_field_360007244833.show');
            client.invoke('ticketFields:custom_field_360007324794.show');
            client.invoke('ticketFields:custom_field_360007322954.hide');
            client.invoke('ticketFields:custom_field_360007325014.hide');
            client.invoke('ticketFields:custom_field_360007246813.hide');
            client.invoke('ticketFields:custom_field_360007244873.hide');
            client.invoke('ticketFields:custom_field_360007244913.hide');
            client.invoke('ticketFields:custom_field_360007323094.hide');
            //client.invoke('ticketFields:custom_field_360007324834.hide');
            //client.invoke('ticketFields:custom_field_360007324814.hide');
            client.invoke('ticketFields:custom_field_360007323074.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
        break;
        case "terapias_fisicas":
            client.invoke('ticketFields:custom_field_360007322854.show');
            client.invoke('ticketFields:custom_field_360007322934.show');
            client.invoke('ticketFields:custom_field_360007322954.show');
            client.invoke('ticketFields:custom_field_360007244893.show');
            client.invoke('ticketFields:custom_field_360007322974.show');
            client.invoke('ticketFields:custom_field_360007246593.show');
            client.invoke('ticketFields:custom_field_360007244833.show');
            client.invoke('ticketFields:custom_field_360007324794.show');
            client.invoke('ticketFields:custom_field_360007244913.hide');
            client.invoke('ticketFields:custom_field_360007322994.hide');
            client.invoke('ticketFields:custom_field_360007325014.hide');
            client.invoke('ticketFields:custom_field_360007246813.hide');
            client.invoke('ticketFields:custom_field_360007244873.hide');
            client.invoke('ticketFields:custom_field_360007323094.hide');
            //client.invoke('ticketFields:custom_field_360007324834.hide');
            //client.invoke('ticketFields:custom_field_360007324814.hide');
            client.invoke('ticketFields:custom_field_360007323074.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
            client.invoke('ticketFields:custom_field_360007245233.hide');
        break;
          case "odontologia":
            client.invoke('ticketFields:custom_field_360007322854.show');
            client.invoke('ticketFields:custom_field_360007322934.show');
            client.invoke('ticketFields:custom_field_360007322954.show');
            client.invoke('ticketFields:custom_field_360007244893.show');
            client.invoke('ticketFields:custom_field_360007322974.show');
            client.invoke('ticketFields:custom_field_360007246593.show');
            client.invoke('ticketFields:custom_field_360007244833.show');
            client.invoke('ticketFields:custom_field_360007324794.show');
            client.invoke('ticketFields:custom_field_360007244913.hide');
            client.invoke('ticketFields:custom_field_360007322994.hide');
            client.invoke('ticketFields:custom_field_360007325014.hide');
            client.invoke('ticketFields:custom_field_360007246813.hide');
            client.invoke('ticketFields:custom_field_360007244873.hide');
            client.invoke('ticketFields:custom_field_360007323094.hide');
            //client.invoke('ticketFields:custom_field_360007324834.hide');
            //client.invoke('ticketFields:custom_field_360007324814.hide');
            client.invoke('ticketFields:custom_field_360007323074.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
            client.invoke('ticketFields:custom_field_360007245233.hide');
        break;
        case null:
            client.invoke('ticketFields:custom_field_360007322854.hide');
            client.invoke('ticketFields:custom_field_360007322934.hide');
            client.invoke('ticketFields:custom_field_360007322954.hide');
            client.invoke('ticketFields:custom_field_360007244893.hide');
            client.invoke('ticketFields:custom_field_360007322974.hide');
            client.invoke('ticketFields:custom_field_360007244913.hide');
            client.invoke('ticketFields:custom_field_360007322994.hide');
            client.invoke('ticketFields:custom_field_360007325014.hide');
            client.invoke('ticketFields:custom_field_360007246813.hide');
            client.invoke('ticketFields:custom_field_360007244873.hide');
            client.invoke('ticketFields:custom_field_360007324834.hide');
            client.invoke('ticketFields:custom_field_360007324814.hide');
            client.invoke('ticketFields:custom_field_360007323074.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
            client.invoke('ticketFields:custom_field_360007245233.hide');
            client.invoke('ticketFields:custom_field_360007323094.hide');
            client.invoke('ticketFields:custom_field_360007246593.hide');
            client.invoke('ticketFields:custom_field_360007244833.hide');
            client.invoke('ticketFields:custom_field_360007324794.hide');
            
            
        break;
    }//end switch
}

function hide_items_three(o){
    switch(o){
          case "inclusión_a_clubes_de_pyp":
            client.invoke('ticketFields:custom_field_360007322854.show');
            client.invoke('ticketFields:custom_field_360007322934.show');
            client.invoke('ticketFields:custom_field_360007322974.show');
          break;
          case "cambio_de_medicamentos_continuos":
            client.invoke('ticketFields:custom_field_360007322854.show');
            client.invoke('ticketFields:custom_field_360007322934.show');
            client.invoke('ticketFields:custom_field_360007322974.show');
          break;
          case "actualizacion_recetas_afiliados_de_pyp":
            client.invoke('ticketFields:custom_field_360007322854.show');
            client.invoke('ticketFields:custom_field_360007322934.show');
            client.invoke('ticketFields:custom_field_360007322974.show');
          break;
          case null:
            client.invoke('ticketFields:custom_field_360007322854.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
            client.invoke('ticketFields:custom_field_360007322934.hide');
            client.invoke('ticketFields:custom_field_360007322954.hide');
            client.invoke('ticketFields:custom_field_360007244873.hide');
            client.invoke('ticketFields:custom_field_360007322974.hide');
            client.invoke('ticketFields:custom_field_360007244893.hide');
            client.invoke('ticketFields:custom_field_360007244913.hide');
            client.invoke('ticketFields:custom_field_360007323074.hide');
            client.invoke('ticketFields:custom_field_360007322994.hide');
            client.invoke('ticketFields:custom_field_360007246813.hide');
            client.invoke('ticketFields:custom_field_360007325014.hide');
            client.invoke('ticketFields:custom_field_360007324834.hide');
            client.invoke('ticketFields:custom_field_360007324814.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
            client.invoke('ticketFields:custom_field_360007246833.hide');
            client.invoke('ticketFields:custom_field_360007247573.hide');
          break;
    }
}

function hide_fields_four(p){
    switch(p){
          case "cambio_de_tarifa_prestadores":
            //colocar condiciones
          break;
          case null:
            client.invoke('ticketFields:custom_field_360007322854.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
            client.invoke('ticketFields:custom_field_360007322934.hide');
            client.invoke('ticketFields:custom_field_360007322954.hide');
            client.invoke('ticketFields:custom_field_360007244873.hide');
            client.invoke('ticketFields:custom_field_360007322974.hide');
            client.invoke('ticketFields:custom_field_360007244893.hide');
            client.invoke('ticketFields:custom_field_360007244913.hide');
            client.invoke('ticketFields:custom_field_360007323074.hide');
            client.invoke('ticketFields:custom_field_360007322994.hide');
            client.invoke('ticketFields:custom_field_360007246813.hide');
            client.invoke('ticketFields:custom_field_360007325014.hide');
            client.invoke('ticketFields:custom_field_360007324834.hide');
            client.invoke('ticketFields:custom_field_360007324814.hide');
            client.invoke('ticketFields:custom_field_360007245213.hide');
          break;
    }
}

function hide_fields_five(w){
    switch(w){
          case "conyuge":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.hide');
          break;
          case "recien_nacido":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.hide');
          break;
          case "hijos_hasta_18_años":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.hide');
          break;
          case "hijos_de_18_-21_años":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.show');
          break;
          case "hijastros":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.hide');
          break;
          case "hijastros_18-21_años":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.show');
          break;
          case "adicionales_discapacitados":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.hide');
          break;
          case "adicionales_hijos_mayores_de_21_años":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.hide');
          break;
          case "adicionales_padres":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.hide');
          break;
          case "adicionales_suegros":
            client.invoke('ticketFields:custom_field_360007325094.show');
            client.invoke('ticketFields:custom_field_360007246853.show');
            client.invoke('ticketFields:custom_field_360008174134.show');
            client.invoke('ticketFields:custom_field_360008322733.hide');
          break;
          case null:
            client.invoke('ticketFields:custom_field_360007325094.hide');
            client.invoke('ticketFields:custom_field_360007246853.hide');
            client.invoke('ticketFields:custom_field_360008174134.hide');
            client.invoke('ticketFields:custom_field_360008322733.hide');
          break;
    }
}

function hide_fields_six(x){
  client.invoke('ticketFields:custom_field_360007325094.hide');
  client.invoke('ticketFields:custom_field_360007246853.hide');
  client.invoke('ticketFields:custom_field_360008174134.hide');
}

function hide_fields_seven(tipo){
  switch(tipo){
    case null:
      client.invoke('ticketFields:custom_field_360007245213.hide');
      client.invoke('ticketFields:custom_field_360007244873.hide');
      client.invoke('ticketFields:custom_field_360007324814.hide');
    break;
    case "alto_costo_origen":
      client.invoke('ticketFields:custom_field_360007245213.show');
      client.invoke('ticketFields:custom_field_360007244873.hide');
      client.invoke('ticketFields:custom_field_360007324814.hide');
    break;
    case "transito_origen":
      client.invoke('ticketFields:custom_field_360007245213.hide');
      client.invoke('ticketFields:custom_field_360007244873.show');
      client.invoke('ticketFields:custom_field_360007324814.hide');
    break;
  }
}

//client.set('ticket.customField:custom_field_360007322994', true);

  //funca perfect
  /*
      client.on('ticket.save', function() {
  // do something
  return true;
   });
  */
 
      
    /*client.on('ticket.solved',function (){
       if (client.set('ticketFields:custom_field_360007322854'==true)){
           return true;
      }else {
        return false;
      }
     
    });*/
   
  
  /*if (m['ticket.form.id']==360000156833){
     if (client.on('ticket.custom_field_360007322774'== "impresion_de_carnet")){
        if (client.set('ticket.customField:custom_field_360007322854') == true){
            client.on('ticket.save', function(){
              console.log("entro para guardarlo")
                return true;
            });
        }
     }
  }*/


