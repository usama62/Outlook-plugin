var arr = [];
arr['CRM_license_total'] = 0;
arr['Payroll_taxes_cost'] = 0;
arr['QA_cost'] = 0;
arr['Telephony_and_min_cost'] = 0;
arr['call_centre_Equipments_cost'] = 0;
arr['it_cost_total'] = 0;
arr['supervisor_cost_inhouse'] = 0;
arr['total_rent'] = 0;
arr['training_total_cost'] = 0;
arr['vacation_inhouse'] = 0;
arr['workforce_cost'] = 0;

var tot_inhouse = 0;
var tot_outsource = 0;
var tot_savings;

function total_inhouse(){
    var text = 0;
    var x;
    for (x in arr) {
        text += arr[x];
    }
    $('#respinhouse').html('$'+text);
    $('#respinhousehidden').val(text);
    tot_inhouse = text;

    tot_savings = tot_inhouse-tot_outsource;
    $('#totalsavingsouthidden').val(tot_savings);
    $('#resptotalsavings').html('$'+tot_savings);
}

function resp_agent_cost(){
    var hpw = ($("#agent11").val() != '')?$("#agent11").val():1;
    var rph = ($("#agent12").val()!= '')?$("#agent12").val():1;
    var weeks = ($("#agent13").val()!= '')?$("#agent13").val():1;

    var call_centre_agent_cost = hpw * rph * weeks;
    if(hpw == 1 && rph == 1 && weeks == 1 ){
        call_centre_agent_cost = 0
    }

    var payrol_taxes_rate = 12.4/100;
    payrol_taxes_cost = Math.ceil(payrol_taxes_rate * call_centre_agent_cost);

    $('#agent14').html('$'+call_centre_agent_cost);
    arr["agent_cost_inhouse"] = call_centre_agent_cost;

    $('#payroll12').html('$'+call_centre_agent_cost);
    $('#payroll14').html('$'+payrol_taxes_cost);
    arr["Payroll_taxes_cost"] = payrol_taxes_cost;

    $('#vacationtop11').html('2w x '+hpw+' x '+rph);
    $('#vacationmiddle11').html(2*hpw*rph);
    $('#vacationtop12').html(hpw+' x '+rph);
    $('#vacationmiddle12').html(hpw*rph);
    $('#vacationtop13').html('8.5d x 8h x '+rph);
    $('#vacationmiddle13').html(8.5*8*rph);
    $('#vacationtotalcost').html('$'+((2*hpw*rph)+(hpw*rph)+(8.5*8*rph)));
    arr["vacation_inhouse"] = (2*hpw*rph)+(hpw*rph)+(8.5*8*rph);

    $('#trainingtop11').html('30h x '+rph);
    $('#trainingmiddle11').html(30*rph);
    $('#trainingtop12').html('40h x '+rph);
    $('#trainingmiddle12').html(40*rph);
    $('#trainingtotalcost').html('$'+((30*rph)+(40*rph)));
    arr["training_total_cost"] = (30*rph)+(40*rph);

    
    total_inhouse();
    // values for hidden fields
    $("#agentcost4hidden").val(call_centre_agent_cost);

    $("#payrolltax2hidden").val(call_centre_agent_cost);
    $("#payrolltax4hidden").val(payrol_taxes_cost);

    $("#vacationcost1hidden").val(2*hpw*rph);
    $("#vacationcost2hidden").val(hpw*rph);
    $("#vacationcost3hidden").val(8.5*8*rph);
    $("#vacationcost4hidden").val(((2*hpw*rph)+(hpw*rph)+(8.5*8*rph)));

    $("#trainingcost1hidden").val(30*rph);
    $("#trainingcost2hidden").val(40*rph);
    $("#trainingcost4hidden").val((30*rph)+(40*rph));

    // //values for hidden fields

    // $('#total_inhouse_hidden').val(arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost']);
    // $('#total_outsource_hidden').val(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]);
 
    // //total Outsourcing cost
    // $('#total_outsourcing').html('$'+(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
    // $('#total_saving').html('$'+(arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
    // $('#total_saving_hidden').val((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
}

function resp_supervisor_cost(){

    var hpw = ($("#supervisor11").val() != '')?$("#supervisor11").val():1;
    var rph = ($("#supervisor12").val()!= '')?$("#supervisor12").val():1;
    var weeks = 50;
    var call_centre_Supervisor_cost_per_agent = Math.ceil((hpw * rph * weeks)/16);

    if(hpw == 1 && rph == 1 ){
        call_centre_Supervisor_cost_per_agent = 0
    }

    // values for hidden fields
        $("#supervisorcost4hidden").val(call_centre_Supervisor_cost_per_agent);
    // $('#total_inhouse_hidden').val(arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost']);
    // values for hidden fields

    $('#supervisor14').html('$'+call_centre_Supervisor_cost_per_agent);
    arr["supervisor_cost_inhouse"] = call_centre_Supervisor_cost_per_agent;

    total_inhouse();
    // $('#total_saving').html('$'+((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"])));
    // $('#total_saving_hidden').val((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
}

function resp_telephony_cost(){

    var monthly_charge = ($("#telephony11").val() != '')?$("#telephony11").val():1;
    var month_count = 12;
    var call_centre_telephony_and_min_cost = monthly_charge * month_count;

    //values for hidden fields
    $("#telephonycost4hidden").val(call_centre_telephony_and_min_cost);
    //values for hidden fields
    
    $('#telephony14').html('$'+call_centre_telephony_and_min_cost);
    arr["Telephony_and_min_cost"] = call_centre_telephony_and_min_cost;

    total_inhouse();
    // $('#total_saving').html('$'+((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"])));
    // $('#total_saving_hidden').val((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
}


function resp_quality_cost(){

    var salary = ($("#quality11").val() != '')?$("#quality11").val():1;
    var agents = 30;
    var call_centre_Quality_assurance =Math.floor(salary/agents);

    //values for hidden fields
    $("#qualitycost4hidden").val(call_centre_Quality_assurance);
    //values for hidden fields

    $('#quality14').html('$'+call_centre_Quality_assurance);
    arr["QA_cost"] = call_centre_Quality_assurance;

    total_inhouse();
    // $('#total_saving').html('$'+((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"])));
    // $('#total_saving_hidden').val((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
}

function resp_workforce_cost(){

    var salary = ($("#workforce11").val() != '')?$("#workforce11").val():1;
    var agents = 150;
    var call_centre_workflow_management =Math.ceil(salary/agents);

    //values for hidden fields
    $("#workforcecost4hidden").val(call_centre_workflow_management);
    //values for hidden fields

    $('#workforce14').html('$'+call_centre_workflow_management);
    arr["workforce_cost"] = call_centre_workflow_management;
    
    total_inhouse();
    // $('#total_saving').html('$'+((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"])));
    // $('#total_saving_hidden').val((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
}

function resp_CRM_cost(){

    var monthly_cost = ($("#crm11").val() != '')?$("#crm11").val():1;
    var months = 12;
    var call_centre_CRM_license =Math.ceil(monthly_cost*months);

    //values for hidden fields
        $("#crmcost4hidden").val(call_centre_CRM_license);
    //values for hidden fields

    $('#crm14').html('$'+call_centre_CRM_license);
    arr["CRM_license_total"] = call_centre_CRM_license;

    total_inhouse();
    // $('#total_saving').html('$'+((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"])));
    // $('#total_saving_hidden').val((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
}

function resp_equipments_cost(){
    
    var call_centre_Equipments = $("#equipments11").val();

    //values for hidden fields
    $("#equipmentscost4hidden").val(call_centre_Equipments);
    //values for hidden fields

    $('#equipments14').html('$'+call_centre_Equipments);
    arr["call_centre_Equipments_cost"] = Number(call_centre_Equipments);

    total_inhouse();
    // $('#total_saving').html('$'+((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"])));
    // $('#total_saving_hidden').val((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
}

function resp_IT_cost(){

    var it_cost_per_agent = ($("#IT11").val() != '')?$("#IT11").val():0;

    //values for hidden fields
        $("#itcosts4hidden").val(it_cost_per_agent);
    //values for hidden fields

    $('#IT14').html('$'+it_cost_per_agent);
    arr["it_cost_total"] = Number(it_cost_per_agent);

    total_inhouse();
    // $('#total_saving').html('$'+((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"])));
    // $('#total_saving_hidden').val((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));

}

function resp_rent_cost(){

    var rent = ($("#rent11").val() != '')?$("#rent11").val():1;
    var associate_share = ($("#rent12").val() != '')?$("#rent12").val():1;

    //values for hidden fields
        $("#rentcost4hidden").val(rent*associate_share);
    //values for hidden field

    $('#rent14').html('$'+(rent*associate_share));
    arr["total_rent"] = Number(rent*associate_share);

    total_inhouse();
    // $('#total_saving').html('$'+((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"])));
    // $('#total_saving_hidden').val((arr['CRM_license_total']+arr['Payroll_taxes_cost']+arr['QA_cost']+arr['Telephony_and_min_cost']+arr['agent_cost_inhouse']+arr['call_centre_Equipments_cost']+arr['it_cost_total']+arr['supervisor_cost_inhouse']+arr['total_rent']+arr['training_total_cost']+arr['vacation_inhouse']+arr['workforce_cost'])-(arr2["training_total_cost_outsourcing"]+arr2["agent_cost_Outsourcing"]));
}

// outsourcing

function agentcostout(){
    var rph = ($("#agentcostout12").val()!= '')?$("#agentcostout12").val():1;

    var call_centre_agent_cost = 40 * rph * 50;
    
    $('#agentcostout14').html('$'+call_centre_agent_cost);

    $('#trainingoutsourcetop11').html('30hr x 20');
    $('#trainingoutsourcemiddle11').html('$600');

    $('#trainingoutsourcetop12').html('50w x 17');
    $('#trainingoutsourcemiddle12').html('$0');

    $('#trainingout14').html('$'+600);
    
    var arr2 = [];
    arr2["agent_cost_outsource"] = call_centre_agent_cost;
    arr2["training_cost_outsource"] = 600;

    $('#agentcostout4hidden').val(call_centre_agent_cost);
    $('#trainingoutsource4hidden').val(600);

    $('#totaloutresp').html(arr2["agent_cost_outsource"]+arr2["training_cost_outsource"]);
    $('#respoutsourcehidden').val(arr2["agent_cost_outsource"]+arr2["training_cost_outsource"]);
    tot_outsource = arr2["agent_cost_outsource"]+arr2["training_cost_outsource"];
    
    tot_savings = tot_inhouse-tot_outsource;
    $('#resptotalsavings').html('$'+tot_savings);
    $('#totalsavingsouthidden').val(tot_savings);

}