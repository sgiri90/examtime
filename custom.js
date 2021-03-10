$(document).ready(function() {
    $("#add-mtf").click(function(event) {
        var tmp_mtf_rows = parseInt($("#mtf_rows").val());
        var tmp_mtf_row_now = tmp_mtf_rows + 1;
        if (tmp_mtf_row_now > 1) {
            $("#sub-mtf").show();
        } else {
            $("#sub-mtf").hide();
        }
        $("#mtf_rows").val(tmp_mtf_row_now).trigger('change');
        var td1 = "<td style=\"padding-left: 20px;padding-top: 20px;\">" + tmp_mtf_row_now + "</td>";
        var td2 = "<td style=\"width:350px; padding-left: 20px;padding-top: 20px;\"><input type=\"text\" name=\"mquest" + tmp_mtf_row_now + "\" class=\"form-control\"  id=\"inputEmail3\" placeholder=\"Enter Question\"><div id=\"errq133" + tmp_mtf_row_now + "\" class=\"custom_error1\" >Question is required</div></td>";
        var td3 = "<td style=\"width:350px; padding-left: 20px;padding-top: 20px;\"><input type=\"text\" name=\"manswer" + tmp_mtf_row_now + "\" class=\"form-control\"   id=\"inputEmail3\" placeholder=\"Enter answer\"><div id=\"erra133" + tmp_mtf_row_now + "\" class=\"custom_error1\">Answer is required</div></td>";
        $('#mtf_table tr:last').after('<tr>' + td1 + td2 + td3 + '</tr>');

    });

    $("#add-group").click(function(event) {

        var tmp_group_name = $("input[name='groupname']").val();
        if (tmp_group_name == "") {
            alert("Enter group name");
            return;
        }
        tmp_group_name = encodeURIComponent(tmp_group_name);
        $.ajax({
            url: "app/addgroup.php?ut=" + tmp_group_name,
            success: function(resu) {
                if (resu == "NOK") {
                    if (confirm("Please relogin to your account") == true) {
                        window.location.href = "./";
                    } else {
                        window.location.href = "./";
                    }
                } else {
                    $("#groupsr").html(resu);
                }
            }
        });

    });


    $("#sub-mtf").click(function(event) {
        var tmp_mtf_rows = parseInt($("#mtf_rows").val());
        var tmp_mtf_row_now = tmp_mtf_rows - 1;
        if (tmp_mtf_row_now > 1) {
            $("#sub-mtf").show();
        } else {
            $("#sub-mtf").hide();
        }
        $("#mtf_rows").val(tmp_mtf_row_now).trigger('change');
        $('#mtf_table tr:last').remove();

    });


    $("#add-question2 button").click(function(event) {
        var error_free = false;
        //var tmp_summernote = $("textarea[name='question2']").val();
        var tmp_summernote = tinyMCE.get('summernote2').getContent();
        var tmp_summernote2 = tmp_summernote.replace(/(<([^>]+)>)/ig, '');
        $("#errq12").hide();
        if (tmp_summernote2 == "") {
            error_free = true;
            $("#errq12").show();
        }
        var tmp_answer = $("input[name='answer12']").val();

        $("#errq13").hide();
        if (tmp_answer == "") {
            error_free = true;
            $("#errq13").show();
        }

        var tmp_marks = $("input[name='marks2']").val();
        $("#errq14").hide();
        if (tmp_marks == "" || !isFinite(tmp_marks)) {
            error_free = true;
            $("#errq14").show();
        }

        var tmp_pdf_ref = $("input[name='pdf_ref2']");
        var tmp_pdf_ref_file = $("input[name='pdf_ref2']")[0].files[0];
        var pdf_ref_ms = 5 * 1024 * 1024;
        $("#errq72_1").hide();
        $("#errq72_2").hide();
        if (tmp_pdf_ref_file == undefined) {

        } else {
            if (tmp_pdf_ref_file.type != "application/pdf") {
                error_free = true;
                $("#errq72_1").show();
            } else if (tmp_pdf_ref_file.size > pdf_ref_ms) {
                error_free = true;
                $("#errq72_2").show();
            }
        }

        var tmp_qcat = $("select[name='qcat2']").val();
        $("#errq82_1").hide();
        if (tmp_qcat == null || tmp_qcat == "") {
            error_free = true;
            $("#errq82_1").show();
        }

        if (error_free) {
            event.preventDefault();
        }
    });

    $("#add-question4 button").click(function(event) {
        var error_free = false;
        //var tmp_summernote = $("textarea[name='question4']").val();
        var tmp_summernote = tinyMCE.get('summernote3').getContent();
        var tmp_summernote2 = tmp_summernote.replace(/(<([^>]+)>)/ig, '');
        $("#esyerrq12").hide();
        if (tmp_summernote2 == "") {
            error_free = true;
            $("#esyerrq12").show();
        }
        var tmp_marks = $("input[name='marks24']").val();
        $("#esyerrq13").hide();
        if (tmp_marks == "" || !isFinite(tmp_marks)) {
            error_free = true;
            $("#esyerrq13").show();
        }

        var tmp_pdf_ref = $("input[name='pdf_ref4']");
        var tmp_pdf_ref_file = $("input[name='pdf_ref4']")[0].files[0];
        var pdf_ref_ms = 5 * 1024 * 1024;
        $("#errq74_1").hide();
        $("#errq74_2").hide();
        if (tmp_pdf_ref_file == undefined) {

        } else {
            if (tmp_pdf_ref_file.type != "application/pdf") {
                error_free = true;
                $("#errq74_1").show();
            } else if (tmp_pdf_ref_file.size > pdf_ref_ms) {
                error_free = true;
                $("#errq74_2").show();
            }
        }

        var tmp_qcat = $("select[name='qcat4']").val();
        $("#errq84_1").hide();
        if (tmp_qcat == null || tmp_qcat == "") {
            error_free = true;
            $("#errq84_1").show();
        }

        if (error_free) {
            event.preventDefault();
        }
    });



    $("#add-question1 button").click(function(event) {
        var error_free = false;
        //var tmp_summernote = $("textarea[name='question1']").val();
        var tmp_summernote = tinyMCE.get('summernote').getContent();
        var tmp_summernote2 = tmp_summernote.replace(/(<([^>]+)>)/ig, '');

        $("#errq1").hide();
        if (tmp_summernote2 == "") {
            error_free = true;
            $("#errq1").show();
        }
        var tmp_op1 = $("input[name='op1']").val();
        $("#errq2").hide();
        if (tmp_op1 == "") {
            error_free = true;
            $("#errq2").show();
        }
        var tmp_op2 = $("input[name='op2']").val();
        $("#errq3").hide();
        if (tmp_op2 == "") {
            error_free = true;
            $("#errq3").show();
        }
        var tmp_op3 = $("input[name='op3']").val();
        $("#errq4").hide();
        if (tmp_op3 == "") {
            error_free = true;
            $("#errq4").show();
        }
        var tmp_op4 = $("input[name='op4']").val();
        $("#errq5").hide();
        if (tmp_op4 == "") {
            error_free = true;
            $("#errq5").show();
        }

        var tmp_marks = $("input[name='marks']").val();
        $("#errq6").hide();
        if (tmp_marks == "" || !isFinite(tmp_marks)) {
            error_free = true;
            $("#errq6").show();
        }

        var tmp_pdf_ref = $("input[name='pdf_ref']");
        var tmp_pdf_ref_file = $("input[name='pdf_ref']")[0].files[0];
        var pdf_ref_ms = 5 * 1024 * 1024;
        $("#errq7_1").hide();
        $("#errq7_2").hide();
        if (tmp_pdf_ref_file == undefined) {

        } else {
            if (tmp_pdf_ref_file.type != "application/pdf") {
                error_free = true;
                $("#errq7_1").show();
            } else if (tmp_pdf_ref_file.size > pdf_ref_ms) {
                error_free = true;
                $("#errq7_2").show();
            }
        }

        var tmp_qcat = $("select[name='qcat']").val();
        $("#errq8_1").hide();
        if (tmp_qcat == null || tmp_qcat == "") {
            error_free = true;
            $("#errq8_1").show();
        }


        if (error_free) {
            event.preventDefault();
        }
    });

    $("#addqbbt").click(function(event) {
        var error_free = false;
        var tmp_aqbname = $("#qbname").val();
        $("#errqb1").hide();
        if (tmp_aqbname == "") {
            error_free = true;
            $("#errqb1").show();
        }
        if (error_free) {
            event.preventDefault();
        } else {
            qbname = $("#qbname").val();
            $.ajax({
                url: "app/add-question-bank.php?&qbname=" + qbname,
                success: function(resu) {
                    if (resu == "OK") {
                        window.location = "question-bank";
                    } else {
                        alert(resu);
                    }
                }
            });
        }
    });

    $("#addexbt").click(function(event) {
        var error_free = false;

        var tmp_axname = $("#axname").val();
        $("#errax1").hide();
        if (tmp_axname == "") {
            error_free = true;
            $("#errax1").show();
        }

        var tmp_axdura = $("#axdura").val();
        $("#errax2").hide();
        $("#errax21").hide();
        if (tmp_axdura == "") {
            error_free = true;
            $("#errax2").show();
        } else {
            if (tmp_axdura < 1) {
                error_free = true;
                $("#errax21").show();
            } else if ((tmp_axdura - Math.floor(tmp_axdura)) != 0) {
                error_free = true;
                $("#errax21").show();
            }
        }

        var tmp_axpass = $("#axpass").val();
        $("#errax3").hide();
        $("#errax31").hide();
        if (tmp_axpass == "") {
            error_free = true;
            $("#errax3").show();
        } else {
            if (tmp_axpass < 1 || tmp_axpass > 100) {
                error_free = true;
                $("#errax31").show();
            } else if ((tmp_axpass - Math.floor(tmp_axpass)) != 0) {
                error_free = true;
                $("#errax31").show();
            }
        }

        var tmp_axreat = $("#axreat").val();
        $("#errax4").hide();
        $("#errax41").hide();
        if (tmp_axreat == "") {
            error_free = true;
            $("#errax4").show();
        } else {
            if (tmp_axreat < 0) {
                error_free = true;
                $("#errax41").show();
            } else if ((tmp_axreat - Math.floor(tmp_axreat)) != 0) {
                error_free = true;
                $("#errax41").show();
            }
        }

        if (error_free) {
            event.preventDefault();
        }
    });


    $("#mtf-save").click(function(event) {
        var error_free = false;
        //var tmp_summernote = $("#summernote223").val();
        var tmp_summernote = tinyMCE.get('summernote223').getContent();
        var tmp_summernote223 = tmp_summernote.replace(/(<([^>]+)>)/ig, '');

        $("#errq1223").hide();
        if (tmp_summernote223 == "") {
            error_free = true;
            $("#errq1223").show();
        }
        var tmp_mtf_rows = parseInt($("#mtf_rows").val());
        var i;
        for (i = 1; i <= tmp_mtf_rows; i++) {
            $("#errq133" + i + "").hide();
            $("#erra133" + i + "").hide();
            var tmp_mquest = $("input[name='mquest" + i + "']").val();
            var tmp_manswer = $("input[name='manswer" + i + "']").val();
            if (tmp_mquest == "") {
                error_free = true;
                $("#errq133" + i + "").show();
            }
            if (tmp_manswer == "") {
                error_free = true;
                $("#erra133" + i + "").show();
            }
        }

        var tmp_marks = $("input[name='marks224']").val();
        $("#errq12234").hide();
        if (tmp_marks == "" || !isFinite(tmp_marks)) {
            error_free = true;
            $("#errq12234").show();
        }

        var tmp_pdf_ref = $("input[name='pdf_ref3']");
        var tmp_pdf_ref_file = $("input[name='pdf_ref3']")[0].files[0];
        var pdf_ref_ms = 5 * 1024 * 1024;
        $("#errq73_1").hide();
        $("#errq73_2").hide();
        if (tmp_pdf_ref_file == undefined) {

        } else {
            if (tmp_pdf_ref_file.type != "application/pdf") {
                error_free = true;
                $("#errq73_1").show();
            } else if (tmp_pdf_ref_file.size > pdf_ref_ms) {
                error_free = true;
                $("#errq73_2").show();
            }
        }

        var tmp_qcat = $("select[name='qcat3']").val();
        $("#errq83_1").hide();
        if (tmp_qcat == null || tmp_qcat == "") {
            error_free = true;
            $("#errq83_1").show();
        }

        if (error_free) {
            event.preventDefault();
        }
    });

    $("input[name='marks224']").change(function() {
        markstog();
    });

    $("#mtf_rows").change(function() {
        markstog();
    });

    function markstog() {
        var tmp_marks = $("input[name='marks224']").val();
        $("#errq12234").hide();
        if (tmp_marks == "" || !isFinite(tmp_marks)) {
            $("#errq12234").show();
        } else {
            var tmp_mtf_rows = parseInt($("#mtf_rows").val());
            tmp_mtf_rows = tmp_mtf_rows * tmp_marks;
            $("#qtmarks").text(tmp_mtf_rows);
        }
    }

    $("#quiz_form :button.btn.btn-secondary.sw-btn-next").click(function() {
        if ($("#qmchunscdiv").length) {
            return;
        }
        qn = $("#smartwizard ul li").filter(".active").text();
        qn = qn.split("Q");
        qnn = 1;
        qmax = $("#qmax90").val();
        if (qn[1] >= qmax) {
            btpnclick(qmax);
        }
        qnn = qn[1] - 1;
        btpnclick(qnn);
        btsumry();
        d
    });

    $("#exnxtbt").click(function() {
        qact = $("#qactive").val();

        if ($("#aesa").length != 0) {
            qmxno = $("#question-" + qact + " :input[name='qn" + qact + "']").val();
            qmxty = $("#question-" + qact + " :input[name='aqty" + qmxno + "']").val();
            gofornxt = true;
            if (qmxty == 1) {
                qmxq = $("#question-" + qact + " :input[name='q" + qmxno + "']:checked").val();
                if (!qmxq) {
                    gofornxt = false;
                }
            } else if (qmxty == 2) {
                qmxq = $("#question-" + qact + " :input[name='q" + qmxno + "']").val();
                if (qmxq == "") {
                    gofornxt = false;
                }
            } else if (qmxty == 3) {
                qrmx = $("#question-" + qact + " :input[name='qr" + qmxno + "']").val();
                unanswered = false;
                for (qrmxi = 0; qrmxi < qrmx; qrmxi++) {
                    qsorno = $("#question-" + qact + " select[name='qm" + qmxno + "#" + qrmxi + "']").val();
                    if (qsorno == null) {
                        unanswered = true;
                    }
                }
                if (unanswered == true) {
                    gofornxt = false;
                }
            } else if (qmxty == 4) {
                qmxq = tinyMCE.get('q' + qmxno).getContent();
                if (qmxq == "") {
                    gofornxt = false;
                }
            }

            if (gofornxt == false) {
                alert("Please Answer the current question before going to next question.");
                return;
            }
        }


        nqact = parseInt(qact);
        qmax = $("#qmax90").val();
        btpnclick(nqact);
        if (nqact >= qmax) {
            alert("No more questions");
            return;
        }
        qact = $("#qactive").val(nqact + 1);
        $("#question-" + nqact).hide();
        $("#question-" + (nqact + 1)).show();
        exsumbtnfn();
        exgraphbtnfn();
        flmrorunmr();
    });

    $("#exprebt").click(function() {

        qact = $("#qactive").val();
        nqact = parseInt(qact);
        qmax = $("#qmax90").val();
        btpnclick(nqact);
        if (nqact <= 1) {
            alert("No more questions");
            return;
        }
        qact = $("#qactive").val(nqact - 1);
        $("#question-" + nqact).hide();
        $("#question-" + (nqact - 1)).show();
        exsumbtnfn();
        exgraphbtnfn();
        flmrorunmr();
    });

    $("#excombtn").click(function() {
        qact = $("#qactive").val();
        qno = $("#question-" + qact + " :input[name='qn" + qact + "']").val();
        $("#question-" + qact + " textarea[name=qc" + qno + "]").toggle();
    });

    $("#quiz_form :button.btn.btn-secondary.sw-btn-prev").click(function() {
        if ($("#qmchunscdiv").length) {
            return;
        }
        qn = $("#smartwizard ul li").filter(".active").text();
        qn = qn.split("Q");
        qnn = 1;
        if (qn[1] <= 1) {
            btpnclick(1);
        }
        qnn = qn[1] + 1;
        btpnclick(qnn);
        btsumry();
    });

    $("#qusave").click(function() {

        qact = $("#qactive").val();
        nqact = parseInt(qact);
        btpnclick(nqact);
    });

    $("#exsumbtn").click(function() {
        exsumbtnfn();
    });

    $("#exsumclbtn").click(function() {
        $("#summary").hide();
    });

    $("#excalbtn").click(function() {

    });

    $("#excalclbtn").click(function() {
        $("#calculator").hide();
    });

    $("#exgrabtn").click(function() {
        exgraphbtnfn();
    });

    $("#exgraclbtn").click(function() {
        $("#graphics").hide();
    });

    $("#exgracl2btn").click(function() {
        $("#graphics2").hide();
        $("#contentf").show();
    });

    $("#exgravsbtn").click(function() {
        $("#graphics2").hide();
        $("#contentf").show();
        $("#graphics").show();
    });

    $("#exgratcbtn").click(function() {
        $("#graphics2").hide();
        $("#contentf").show();
        $("#graphics").hide();
    });

    $("#nflbt").click(function() {
        flupdate();
    });

    $("#exendbt").click(function() {
        asktmp = confirm("Are you sure you want to end test ? ");
        if (asktmp == true) {
            btpnclick(parseInt($("#qactive").val()));
            document.quiz.submit();
        }
    });

    $("#qmsum").click(function() {
        $("#sumdiv").toggle();
    });

    $("#qmchunsc").click(function() {
        btqmchunsc();
    });

    $("#stuaass").click(function() {
        assignstu();
    });

    $("#reporetbt").click(function() {
        repex = $("select[name='repoexam']").val();
        repqty = $("select[name='repoqty']").val();
        exid = $("input[name='repoexamid']").val();
        if (repex == "" || repqty == "") {
            alert("Please select Exam and Question type.");
            return;
        }

        $.ajax({
            url: "app/pullqdata.php?repex=" + repex + "&repqty=" + repqty,
            success: function(resu) {
                if (resu == "NOK") {
                    alert("No Questions for the selected options.");
                    return;
                }
                rephtml = "";
                if (resu == "") {
                    return;
                }
                resun = JSON.parse(resu);
                if (resun.length < 1) {
                    return;
                }
                tmpqb = false;
                tmpqb = GetURLParameter('qb');

                for (rei = 0; rei < resun.length; rei++) {
                    if (repqty == "3") {
                        resun_sub = JSON.parse(resun[rei]['question']);
                        resun_sub_len = resun_sub.length;
                        if (resun_sub_len > 0) {
                            rephtml += "<tr><td>" + resun[rei]['id'] + "</td><td>" + resun_sub[(resun_sub_len - 1)] + "</td><td><a href='app/dup-question?node=" + resun[rei]['id'] + "&exid=" + exid + "&qb=" + tmpqb + "'>Duplicate</a></td></tr>";
                        }
                    } else {
                        rephtml += "<tr><td>" + resun[rei]['id'] + "</td><td>" + resun[rei]['question'] + "</td><td><a href='app/dup-question?node=" + resun[rei]['id'] + "&exid=" + exid + "&qb=" + tmpqb + "'>Duplicate</a></td></tr>";
                    }
                }
                $("#zero_configuration_table").dataTable().fnDestroy();
                $("#zero_configuration_table tbody").html(rephtml);
                $("#zero_configuration_table").DataTable({ "ordering": false })
            }
        });
    });

    $("select[name='studep']").change(function() {
        hl = "studep";
        hlval = $("select[name='studep']").val();
        $.ajax({
            url: "constants/fetch-class.php?opt=" + hlval,
            success: function(resu) {
                $("#class-data").html(resu);
            }
        });
        $("select[name='stugroups']").prop('selectedIndex', 0);
        $("input[name='stuid']").val('');
        $("input[name='stuname']").val('');
        $("input[name='stuemail']").val('');
        $("input[name='stuphone']").val('');
        pullgdata(hl, hlval, "");
    });

    $("select[name='stuclass']").change(function() {
        hl = "stuclass";
        hlval = $("select[name='studep']").val();
        hlval2 = $("select[name='stuclass']").val();
        $("select[name='stugroups']").prop('selectedIndex', 0);
        $("input[name='stuid']").val('');
        $("input[name='stuname']").val('');
        $("input[name='stuemail']").val('');
        $("input[name='stuphone']").val('');
        pullgdata(hl, hlval, hlval2);
    });

    $("select[name='stugroups']").change(function() {
        hl = "stugroups";
        hlval = $("select[name='stugroups']").val();
        $("select[name='studep']").prop('selectedIndex', 0);
        $("select[name='stuclass']").empty().append("<option value=\"\" selected>No class</option>");
        $("input[name='stuid']").val('');
        $("input[name='stuname']").val('');
        $("input[name='stuemail']").val('');
        $("input[name='stuphone']").val('');
        pullgdata(hl, hlval, "");
    });

    $("input[name='stuid']").change(function() {
        hl = "stuid";
        hlval = $("input[name='stuid']").val();
        $("select[name='studep']").prop('selectedIndex', 0);
        $("select[name='stuclass']").empty().append("<option value=\"\" selected>No class</option>");
        $("select[name='stugroups']").prop('selectedIndex', 0);
        $("input[name='stuname']").val('');
        $("input[name='stuemail']").val('');
        $("input[name='stuphone']").val('');
        pullgdata(hl, hlval, "");
    });

    $("input[name='stuname']").change(function() {
        hl = "stuname";
        hlval = $("input[name='stuname']").val();
        $("select[name='studep']").prop('selectedIndex', 0);
        $("select[name='stuclass']").empty().append("<option value=\"\" selected>No class</option>");
        $("select[name='stugroups']").prop('selectedIndex', 0);
        $("input[name='stuid']").val('');
        $("input[name='stuemail']").val('');
        $("input[name='stuphone']").val('');
        pullgdata(hl, hlval, "");
    });

    $("input[name='stuemail']").change(function() {
        hl = "stuemail";
        hlval = $("input[name='stuemail']").val();
        $("select[name='studep']").prop('selectedIndex', 0);
        $("select[name='stuclass']").empty().append("<option value=\"\" selected>No class</option>");
        $("select[name='stugroups']").prop('selectedIndex', 0);
        $("input[name='stuid']").val('');
        $("input[name='stuname']").val('');
        $("input[name='stuphone']").val('');
        pullgdata(hl, hlval, "");
    });

    $("input[name='stuphone']").change(function() {
        hl = "stuphone";
        hlval = $("input[name='stuphone']").val();
        $("select[name='studep']").prop('selectedIndex', 0);
        $("select[name='stuclass']").empty().append("<option value=\"\" selected>No class</option>");
        $("select[name='stugroups']").prop('selectedIndex', 0);
        $("input[name='stuid']").val('');
        $("input[name='stuname']").val('');
        $("input[name='stuemail']").val('');
        pullgdata(hl, hlval, "");
    });

    $("input[name='asexto']").change(function() {
        if ($("input[name='asexto']:checked").val() == "d") {
            $("#exded").show();
            $("#exgpd").hide();
            if ($("#exwa").length != 0) {
                $("#exwa").hide();
            }
        } else if ($("input[name='asexto']:checked").val() == "g") {
            $("#exgpd").show();
            $("#exded").hide();
            if ($("#exwa").length != 0) {
                $("#exwa").hide();
            }
        } else if ($("input[name='asexto']:checked").val() == "w") {
            $("#exgpd").hide();
            $("#exded").hide();
            $("#exwa").show();
        }
    });

    $("#exassignbt").click(function() {
        $("#exassignbt").html("<i class=\"fa fa-spinner\" aria-hidden=\"true\"></i> wait..");
        type = $("input[name='asexto']:checked").val();
        tid = "";
        tid_sub = "";
        if (type == "d") {
            exasd = $("select[name='exdep']").val();
            if (exasd == "") {
                alert("Please select department");
                return;
            }
            tid = exasd;
            exasc = $("select[name='exclass']").val();
            if (exasc == "" || exasc == null) {

            } else {
                type = "c";
                tid_sub = exasc;
            }
        } else if (type == "g") {
            exasg = $("select[name='exgroups']").val();
            if (exasg == "") {
                alert("Please select group");
                return;
            }
            type = "g";
            tid = exasg;
        }
        exam_id = $("select[name='exexams']").val();
        if (exam_id == "") {
            alert("Please select exam");
            return;
        }
        $.ajax({
            url: "app/assignexam.php?exam_id=" + exam_id + "&type=" + type + "&tid=" + tid + "&tid_sub=" + tid_sub,
            success: function(resu) {
                alert(resu);
                $("#exassignbt").html("Publish Exam");
            }
        });
    });

    $("#clsubbt").click(function(event) {
        var error_free = false;

        var tmp_hlogo = $("input[name='hlogo']");
        var tmp_hlogo_file = $("input[name='hlogo']")[0].files[0];
        var ref_ms = 2 * 1024 * 1024;
        $("#errqhl1").hide();
        $("#errqhl2").hide();
        if (tmp_hlogo_file == undefined) {

        } else {
            if (tmp_hlogo_file.type != "image/jpeg") {
                error_free = true;
                $("#errqhl1").show();
            } else if (tmp_hlogo_file.size > ref_ms) {
                error_free = true;
                $("#errqhl2").show();
            }
        }

        var tmp_hicon = $("input[name='hicon']");
        var tmp_hicon_file = $("input[name='hicon']")[0].files[0];
        var ref_ms = 1 * 1024 * 1024;
        $("#errqhl11").hide();
        $("#errqhl22").hide();
        if (tmp_hicon_file == undefined) {

        } else {
            if (tmp_hicon_file.type != "image/x-icon") {
                error_free = true;
                $("#errqhl11").show();
            } else if (tmp_hlogo_file.size > ref_ms) {
                error_free = true;
                $("#errqhl22").show();
            }
        }

        if (error_free) {
            event.preventDefault();
        }
    });

    $("#clresbt").click(function(event) {
        $("#hcolor").val("#FFFFFF");
        $("#htcolor").val("#000000");
        $("#scolor").val("#FFFFFF");
        $("#stcolor").val("#000000");
    });

    $("#assa").click(function() {
        assav = $("#assa").val();
        if (assav == "at") {
            $("#atd").show();
        } else {
            $("#atd").hide();
        }
    });

    $("#sasubmit").click(function() {
        assav = $("#assa").val();
        errorsa = false;
        errormsg = "";

        if ($("#saids").val() == "") {
            errorsa = true;
            errormsg = "Select atleast one id";
        } else if (assav == null) {
            errorsa = true;
            errormsg = "Select Action";
        } else {
            if (assav == "at") {
                if ($("#at").val() == "") {
                    errorsa = true;
                    errormsg = "Add Time";
                }
            }
        }

        if (errorsa == true) {
            alert(errormsg);
            event.preventDefault();
        }
    });

    $("#txwsubbtn").click(function() {

    });

    $("#blexam").change(function() {
        blexamv = $("#blexam").val();
        if (blexamv == "") {
            $("#blmcq").val("0");
            $("#blfbq").val("0");
            $("#blmfq").val("0");
            $("#bletq").val("0");
            $("#bltnq").val("0");
            $("#blmcqa").html("0");
            $("#blfbqa").html("0");
            $("#blmfqa").html("0");
            $("#bletqa").html("0");
            return;
        }
        $.ajax({
            url: "app/bldata.php?hlval=" + blexamv + "&hl=pull",
            success: function(resu) {
                if (resu == "NOK") {

                } else {
                    resujd = JSON.parse(resu);
                    if (resujd['blueprint'] != "") {
                        resujdb = JSON.parse(resujd["blueprint"]);
                        $("#blmcq").val(resujdb["blmcq"]);
                        $("#blfbq").val(resujdb["blfbq"]);
                        $("#blmfq").val(resujdb["blmfq"]);
                        $("#bletq").val(resujdb["bletq"]);
                        $("#bltnq").val(resujdb["bltnq"]);

                        $("#blmcqa").html(resujd["blmcq"]);
                        $("#blfbqa").html(resujd["blfbq"]);
                        $("#blmfqa").html(resujd["blmfq"]);
                        $("#bletqa").html(resujd["bletq"]);
                    }
                }
            }
        });
    });

    $("#blcreate").click(function() {
        if (upnoq() != true) {
            return;
        }
        blexamv = $("#blexam").val();
        bldata = { "blmcq": "0", "blfbq": "0", "blmfq": "0", "bletq": "0", "bltnq": "0" };
        bldata["blmcq"] = $("#blmcq").val();
        bldata["blfbq"] = $("#blfbq").val();
        bldata["blmfq"] = $("#blmfq").val();
        bldata["bletq"] = $("#bletq").val();
        bldata["bltnq"] = $("#bltnq").val();
        bldataje = encodeURI(JSON.stringify(bldata));

        $.ajax({
            url: "app/bldata.php?hlval=" + blexamv + "&hlval2=" + bldataje + "&hl=put",
            success: function(resu) {
                if (resu == "NOK") {
                    alert("Unknown Error!");
                } else {
                    if (resu == "OK") {
                        alert("Action Completed");
                    }
                }
            }
        });
    });

    $("#blmcq").change(function() {
        upnoq();
    });
    $("#blfbq").change(function() {
        upnoq();
    });
    $("#blmfq").change(function() {
        upnoq();
    });
    $("#bletq").change(function() {
        upnoq();
    });

    $("#beasbt").click(function() {
        pscode = $("#passcode").val();
        if (pscode == "") {
            alert("Please enter the passcode to begin");
        } else {
            node = $("#node").val();
            npc = btoa($("#passcode").val());
            $.ajax({
                url: "app/assesup3.php?&ut=1990&npc=" + npc + "&node=" + node,
                success: function(resu) {
                    if (resu == "OK") {
                        br = confirm("Are you sure to begin the Assessment");
                        if (br == true) {
                            document.bamnt.submit();
                        }
                    } else {
                        alert("Invalid Passcode.");
                    }
                }
            });
        }
    });

    $("#gselall").click(function() {
        nosed = $(".cust_table2").find('input[type=checkbox]');
        if (nosed.length < 2) {
            return;
        }
        if ($(this).prop("checked") == true) {
            nosed.each(function() {
                tsid = $(this).attr("id");
                if (tsid != "gselall") {
                    if ($("#" + tsid).prop("checked") == false) {
                        $("#" + tsid).trigger("click");
                    }
                }
            });
        } else if ($(this).prop("checked") == false) {
            nosed.each(function() {
                tsid = $(this).attr("id");
                if (tsid != "gselall") {
                    if ($("#" + tsid).prop("checked") == true) {
                        $("#" + tsid).trigger("click");
                    }
                }
            });
        }
    });

    $("#arselall").click(function() {
        nosed = $("#zero_configuration_table").find('input[type=checkbox]');
        if (nosed.length < 2) {
            return;
        }
        if ($(this).prop("checked") == true) {
            nosed.each(function() {
                tsid = $(this).attr("id");
                if (tsid != "arselall") {
                    if ($("#" + tsid).prop("checked") == false) {
                        $("#" + tsid).trigger("click");
                    }
                }
            });
        } else if ($(this).prop("checked") == false) {
            nosed.each(function() {
                tsid = $(this).attr("id");
                if (tsid != "arselall") {
                    if ($("#" + tsid).prop("checked") == true) {
                        $("#" + tsid).trigger("click");
                    }
                }
            });
        }
    });

});

function exgraphvlbfn() {
    qact = $("#qactive").val();
    qn = $("input[name='qn" + qact + "']").val();
    qpref = $("input[name='qnpr" + qn + "']").val();
    gesphtml = "No Graphic reference file for this Question";
    if (qpref == "" || qpref == null) {} else {
        gesphtml = '<embed src="/assets/uploads/pdf/' + qpref + '" type="application/pdf" width="100%" height="400px">';
    }
    $("#modalbodyex").html(gesphtml);
    $("#refpdfmodal").modal('show');
}

function exgraphbtnfn() {
    qact = $("#qactive").val();
    qn = $("input[name='qn" + qact + "']").val();
    qpref = $("input[name='qnpr" + qn + "']").val();
    gesphtml = "No Graphic reference file for this Question";
    if (qpref == "" || qpref == null) {} else {
        gesphtml = '<button class="btn btn-danger m-1 float-right" id="exgravlbtn" onclick="exgraphvlbfn();">View Larger</button><embed src="/assets/uploads/pdf/' + qpref + '" type="application/pdf" width="100%" height="300px">';
    }
    $("#gesp").html(gesphtml);
}

function exsumbtnfn() {
    qmx = $("#qmax90").val();
    if (qmx < 1) {
        return;
    }
    var unans = [];
    for (qmxi = 1; qmxi <= qmx; qmxi++) {
        qmxno = $("#question-" + qmxi + " :input[name='qn" + qmxi + "']").val();
        qmxty = $("#question-" + qmxi + " :input[name='aqty" + qmxno + "']").val();
        if (qmxty == 1) {
            qmxq = $("#question-" + qmxi + " :input[name='q" + qmxno + "']:checked").val();
            if (!qmxq) {
                unans.push(qmxi);
            }
        } else if (qmxty == 2) {
            qmxq = $("#question-" + qmxi + " :input[name='q" + qmxno + "']").val();
            if (qmxq == "") {
                unans.push(qmxi);
            }
        } else if (qmxty == 3) {
            qrmx = $("#question-" + qmxi + " :input[name='qr" + qmxno + "']").val();
            unanswered = false;
            for (qrmxi = 0; qrmxi < qrmx; qrmxi++) {
                qsorno = $("#question-" + qmxi + " select[name='qm" + qmxno + "#" + qrmxi + "']").val();
                if (qsorno == null) {
                    unanswered = true;
                }
            }
            if (unanswered == true) {
                unans.push(qmxi);
            }
        } else if (qmxty == 4) {
            qmxq = tinyMCE.get('q' + qmxno).getContent();
            if (qmxq == "") {
                unans.push(qmxi);
            }
        }
    }

    snflv = $("#nfl").val();
    snflva = snflv.split("*");
    sumhtml = "";

    if ($("#aesa").length != 0) {
        qact = $("#qactive").val();
        aesalrv = $("#aesalr").val();
        if (qact >= aesalrv) {
            $("#aesalr").val(qact);
        }
        qmx = $("#aesalr").val();
    }

    for (si = 1; si <= qmx; si++) {
        if (snflva.includes("" + si + "")) {
            sumhtml += '<a onclick="flactvive(' + si + ');" class="list-group-item list-group-item-action bg-danger text-white d-flex justify-content-between align-items-center">' + si + '&nbsp;&nbsp;&nbsp;&nbsp;Flagged<i class="fas fa-flag"></i></a>';
        } else if (unans.includes(si)) {
            sumhtml += '<a onclick="flactvive(' + si + ');" class="list-group-item list-group-item-action bg-gray-200 text-black d-flex justify-content-between align-items-center">' + si + '&nbsp;&nbsp;&nbsp;&nbsp;Unanswered<i class="fa fa-close"></i></a>';
        } else {
            sumhtml += '<a onclick="flactvive(' + si + ');" class="list-group-item list-group-item-action bg-gray-300 text-black d-flex justify-content-between align-items-center">' + si + '&nbsp;&nbsp;&nbsp;&nbsp;Answered<i class="fas fa-check"></i></a>';
        }

    }

    $("#sumdivh").html(sumhtml);
}

function upnoq() {
    alert_error = false;
    blmcqv = $("#blmcq").val();
    if (blmcqv >= 0) {
        if (blmcqv % 1 != 0) {
            alert_error = true;
        }
    } else {
        alert_error = true;
    }
    blfbqv = $("#blfbq").val();
    if (blfbqv >= 0) {
        if (blfbqv % 1 != 0) {
            alert_error = true;
        }
    } else {
        alert_error = true;
    }
    blmfqv = $("#blmfq").val();
    if (blmfqv >= 0) {
        if (blmfqv % 1 != 0) {
            alert_error = true;
        }
    } else {
        alert_error = true;
    }
    bletqv = $("#bletq").val();
    if (bletqv >= 0) {
        if (bletqv % 1 != 0) {
            alert_error = true;
        }
    } else {
        alert_error = true;
    }
    if (alert_error == true) {
        alert("Put correct values in the fields");
        return;
    }
    bltnqv = parseInt(blmcqv) + parseInt(blfbqv) + parseInt(blmfqv) + parseInt(bletqv);
    $("#bltnq").val(bltnqv);
    return true;
}

function updatesai(saival) {
    saidst = $("#saids").val();
    if (saidst == "") {
        $("#saids").val(saival);
        return;
    }
    saidsta = saidst.split(",");
    inrf = false;
    nsaida = [];
    nsic = 0;
    for (i = 0; i < saidsta.length; i++) {
        tv1 = saidsta[i];
        tv2 = saival;
        if (tv1 == tv2) {
            inrf = true;
        } else {
            nsaida[nsic] = tv1;
            nsic++;
        }
    }
    if (inrf == false) {
        nsaida[nsic] = saival;
    }
    saidsts = nsaida.join(",");
    $("#saids").val(saidsts);
}

function flactvive(fto) {
    ftqact = $("#qactive").val();
    ftqact = parseInt(ftqact);
    btpnclick(ftqact);
    $("#question-" + ftqact).hide();
    $("#question-" + fto).show();
    $("#qactive").val(fto);
    $("#exsumbtn").trigger("click");
    flmrorunmr();
}

function flcountup() {
    nflv = $("#nfl").val();
    nflva = nflv.split("*");
    nflvc = 0;
    for (ni = 0; ni < nflva.length; ni++) {
        if (nflva[ni] != "") {
            nflvc++;
        }
    }
    $("#cqid").html(nflvc);
}

function flmrorunmr() {
    qact = $("#qactive").val();
    nflv = $("#nfl").val();
    nflva = nflv.split("*");
    if (nflva.includes(qact)) {
        $("#nflbt").html('UnFlag');
    } else {
        $("#nflbt").html('Flag');
    }
}


function flupdate() {
    qact = $("#qactive").val();
    nflv = $("#nfl").val();
    nflva = nflv.split("*");
    if (nflva.includes(qact) == true) {
        nflvi = nflva.indexOf(qact);
        nflva.splice(nflvi, 1);
    } else {
        nflva.push(qact);
    }
    nflvc = 0;
    for (ni = 0; ni < nflva.length; ni++) {
        if (nflva[ni] != "") {
            nflvc++;
        }
    }
    $("#cqid").html(nflvc);
    nflvns = nflva.join("*");
    $("#nfl").val(nflvns);
    node = $("#node").val();
    npc = $("#npc").val();
    ppc = $("#ppc").val();
    npf = btoa($("#nfl").val());
    $.ajax({
        url: "app/assesup2_1.php?ut=1990&node=" + node + "&npc=" + npc + "&npf=" + npf + "&ppc=" + ppc,
        success: function(resu) {
            if (resu == "NOK") {
                if (confirm("This session is closed") == true) {
                    window.location.href = "./";
                } else {
                    window.location.href = "./";
                }
            } else {
                flmrorunmr();
                if ($("#summary").is(":visible")) {
                    $("#exsumbtn").trigger("click");
                    $("#summary").show();
                }
            }
        }
    });
}

function compmarks(m1, m2, m3, nler) {
    if (m1 > m2) {
        alert("You can't score more than total marks");
        $("#" + nler).val(m3);
    }
}

function qbesubbt(qbid) {
    var tmp_aqbename = $("#qbename" + qbid).val();
    if (tmp_aqbename == "") {
        alert("Please enter Question bank name");
        return;
    }
    qbidt = $("#qbid" + qbid).val();
    $.ajax({
        url: "app/add-question-bank.php?&qbname=" + tmp_aqbename + "&qbid=" + qbidt,
        success: function(resu) {
            if (resu == "OK") {
                window.location = "question-bank";
            } else {
                alert(resu);
            }
        }
    });
}

function btqmchunsc() {
    qmx = $("#qmax90").val();
    if (qmx < 1) {
        return;
    }
    var unans = [];
    for (qmxi = 1; qmxi <= qmx; qmxi++) {
        qmxno = $("#question-" + qmxi + " :input[name='qn" + qmxi + "']").val();
        qscotm = $("#question-" + qmxi + " :input[name='qsco" + qmxno + "']").val();
        qmqty = $("#question-" + qmxi + " :input[name='aqty" + qmxno + "']").val();
        if (qmqty == 4 && qscotm == 0) {
            unans.push(qmxi);
        }
    }

    htmlprep = "<b><u>Un Auto Scored Answers</u></b><br><br>";
    if (unans.length > 0) {
        htmlprep += "<ul>";
        for (hpi = 0; hpi < unans.length; hpi++) {
            htmlprep += "<li><a  href=\"#question-" + unans[hpi] + "\">" + unans[hpi] + "</a></li>";
        }
        htmlprep += "</ul>";
    } else {
        htmlprep += "None";
    }

    $("#qmchunscdiv").html(htmlprep);
    $("#qmchunscdiv").show();
}

function btsumry() {
    qmx = $("#qmax90").val();
    if (qmx < 1) {
        return;
    }
    var unans = [];
    for (qmxi = 1; qmxi <= qmx; qmxi++) {
        qmxno = $("#question-" + qmxi + " :input[name='qn" + qmxi + "']").val();
        qmxty = $("#question-" + qmxi + " :input[name='aqty" + qmxno + "']").val();
        if (qmxty == 1) {
            qmxq = $("#question-" + qmxi + " :input[name='q" + qmxno + "']:checked").val();
            if (!qmxq) {
                unans.push(qmxi);
            }
        } else if (qmxty == 2) {
            qmxq = $("#question-" + qmxi + " :input[name='q" + qmxno + "']").val();
            if (qmxq == "") {
                unans.push(qmxi);
            }
        } else if (qmxty == 4) {
            qmxq = $("#question-" + qmxi + " :input[name='q" + qmxno + "']").val();
            if (qmxq == "") {
                unans.push(qmxi);
            }
        }
    }

    htmlprep = "<b><u>Unanswered questions</u></b><br><br>";
    if (unans.length > 0) {
        htmlprep += "<ul>";
        for (hpi = 0; hpi < unans.length; hpi++) {
            htmlprep += "<li><a  href=\"#question-" + unans[hpi] + "\">" + unans[hpi] + "</a></li>";
        }
        htmlprep += "</ul>";
    } else {
        htmlprep += "No unanswered questions ( Note : Please check the match the following types )";
    }

    $("#sumdiv").html(htmlprep);
}

function btpnclick(qn) {
    node = $("#node").val();
    npc = $("#npc").val();
    ppc = $("#ppc").val();
    qno = $("#question-" + qn + " :input[name='qn" + qn + "']").val();
    qty = $("#question-" + qn + " :input[name='aqty" + qno + "']").val();
    var qkar = [];
    qkar.push(qno);
    aj = false;
    if (qty == 1) {
        qkar.push($("#question-" + qn + " :input[name='q" + qno + "']:checked").val());
        qkar.push($("#question-" + qn + " :input[name='qc" + qno + "']").val());
        qkarj = JSON.stringify(qkar);
        qkarB = btoa(qkarj);
        qkarU = encodeURIComponent(qkarB);
        aj = true;
    } else if (qty == 2) {
        qkar.push($("#question-" + qn + " :input[name='q" + qno + "']").val());
        qkar.push($("#question-" + qn + " :input[name='qc" + qno + "']").val());
        qkarj = JSON.stringify(qkar);
        qkarB = btoa(qkarj);
        qkarU = encodeURIComponent(qkarB);
        aj = true;
    } else if (qty == 3) {
        qr = $("#question-" + qn + " :input[name='qr" + qno + "']").val();
        var qkarmt = [];
        for (qri = 0; qri < qr; qri++) {
            qkarmt.push($("#question-" + qn + " select[name='qm" + qno + "#" + qri + "']").val());
        }
        qkar.push(JSON.stringify(qkarmt));
        qkar.push($("#question-" + qn + " :input[name='qc" + qno + "']").val());
        qkarj = JSON.stringify(qkar);
        qkarB = btoa(qkarj);
        qkarU = encodeURIComponent(qkarB);
        aj = true;
    } else if (qty == 4) {
        tinyqed = tinyMCE.get('q' + qno).getContent();
        qkar.push(tinyqed);
        qkar.push($("#question-" + qn + " :input[name='qc" + qno + "']").val());
        qkarj = JSON.stringify(qkar);
        qkarB = btoa(qkarj);
        qkarU = encodeURIComponent(qkarB);
        aj = true;
    }
    if (aj == true) {
        aj = false;
        $.ajax({
            url: "app/assesup2.php?ut=" + qkarU + "&node=" + node + "&npc=" + npc + "&ppc=" + ppc,
            success: function(resu) {
                //alert(resu);
                if (resu == "NOK") {
                    if (confirm("This session is closed") == true) {
                        window.location.href = "./";
                    } else {
                        window.location.href = "./";
                    }
                }
            }
        });
    }
}

function updatecls(dep, idtoupdate) {
    $.ajax({
        url: "constants/fetch-class.php?opt=" + dep,
        success: function(resu) {
            $(idtoupdate).html(resu);
        }
    });
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function updatestuasel(selval) {
    //console.log("sleval : " + selval);
    sv = $("input[name='stuasel']").val();
    if (sv == "") {
        sva = [];
    } else {
        sva = sv.split("*");
    }
    if ($("input[name='sel" + selval + "']").prop("checked")) {
        //console.log("sel checked : " + selval);
        if (!sva.includes(selval)) {
            //console.log("sva not includes : " + selval)
            sva.push(selval);
        }
    } else {
        if (sva.includes(selval)) {
            //console.log("sva includes : " + selval);
            for (pi = 0; pi < sva.length; pi++) {
                if (sva[pi] == selval) {
                    sva.splice(pi, 1);
                }
            }
        }
    }
    sv2 = sva.join("*");
    $("input[name='stuasel']").val(sv2);
}

function assignstu() {

    sv = $("input[name='stuasel']").val();
    if (sv.trim() == "") {
        alert("Please select atleast one student");
        return;
    }
    sva = sv.split("*");
    if (sva.length < 1) {
        alert("Please select atleast one student");
        return;
    }
    sg = $("select[name='stuagroups']").val();
    if (sg == "") {
        alert("Please select group");
        return;
    }
    sc = 0;
    if ($("input[name='stuarem']").prop("checked")) {
        sc = 1;
    }

    $.ajax({
        url: "app/putgdata.php?sv=" + sv + "&sg=" + sg + "&sc=" + sc,
        success: function(resu) {
            if (resu == "OK") {
                alert("Action completed");
                hl = "stugroups";
                hlval = sg;
                $("#gselall").prop('checked', false);
                $("select[name='stugroups']").val(sg);
                $("select[name='studep']").prop('selectedIndex', 0);
                $("select[name='stuclass']").empty().append("<option value=\"\" selected>No class</option>");
                $("input[name='stuid']").val('');
                $("input[name='stuname']").val('');
                $("input[name='stuemail']").val('');
                $("input[name='stuphone']").val('');
                pullgdata(hl, hlval, "");
            } else {
                alert("Action Not completed");
            }
        }
    });
}

function imup(file, el) {
    data = new FormData();
    data.append("file", file);
    $.ajax({
        data: data,
        type: "POST",
        url: "app/imup_2.php",
        cache: false,
        contentType: false,
        processData: false,
        success: function(url) {
            if (url != "NOK") {
                $(el).summernote('editor.insertImage', url);
            } else {
                alert("Something WRONG with inserted image, Please change");
            }
        }
    });
}

function checkDeviceSupport() {
    if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
        navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
    }

    if (!navigator.enumerateDevices && navigator.enumerateDevices) {
        navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
    }

    if (!navigator.enumerateDevices) {
        return false;
    }

    dev_supported = false;

    navigator.enumerateDevices(function(devices) {

        devices.forEach(function(_device) {
            var device = {};
            for (var d in _device) {
                device[d] = _device[d];
            }

            if (device.kind === 'audio') {
                device.kind = 'audioinput';
            }

            if (device.kind === 'video') {
                device.kind = 'videoinput';
            }

            if (!device.deviceId) {
                device.deviceId = device.id;
            }

            if (!device.id) {
                device.id = device.deviceId;
            }

            if (!device.label) {
                device.label = 'Please invoke getUserMedia once.';
                if (!isHTTPs) {
                    device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
                }
            } else {
                if (device.kind === 'videoinput') {
                    dev_supported = true;
                }

                if (device.kind === 'audioinput') {
                    dev_supported = true;
                }
            }

        });

    });

    return dev_supported;
}

function handleError(error) {
    if (error) {
        xd34h = false;
        alert("You can't stop the recording.");
        window.location.href = "/student/exerror";
    }
}

function initializeSessionCam(apiKey, sessionId, token, proct_type) {
    var session = OT.initSession(apiKey, sessionId);
    if (proct_type == "Manual") {
        session.on('streamCreated', function(event) {
            session.subscribe(event.stream, 'onbacam', {
                insertMode: 'append',
                width: '100%',
                height: '100%'
            }, handleErroragent);
        });
    }
    var publisher = OT.initPublisher('scam', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
    }, handleError);
    session.connect(token, function(error) {
        if (error) {
            handleError(error);
        } else {
            $("#chkas").html('<i class="fa-li fa fa-check-square"></i>');
            $("#chkvs").html('<i class="fa-li fa fa-check-square"></i>');
            xd34h = true;
            session.publish(publisher, handleError);
        }
    });
    publisher.on('mediaStopped', function(event) {
        alert("You can't stop the recording.");
        window.location.href = "/student/exerror";
    });
    if (proct_type == "Manual") {
        var msgHistory = document.querySelector('#history');
        session.on('signal:msg', function signalCallback(event) {
            var msg = document.createElement('p');
            msg.textContent = event.data;
            msg.className = event.from.connectionId === session.connection.connectionId ? 'mine' : 'theirs';
            msgHistory.appendChild(msg);
            msg.scrollIntoView();
        });
        var form = document.querySelector('#chatform');
        var msgTxt = document.querySelector('#msgTxt');

        // Send a signal once the user enters data in the form
        form.addEventListener('submit', function submit(event) {
            event.preventDefault();

            session.signal({
                type: 'msg',
                data: msgTxt.value
            }, function signalCallback(error) {
                if (error) {
                    console.error('Error sending signal:', error.name, error.message);
                } else {
                    msgTxt.value = '';
                }
            });
        });
    }
    return true;
}

function initializeSessionCamMp(apiKey, sessionId, token) {
    var session = OT.initSession(apiKey, sessionId);
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'onbacam', {
            insertMode: 'append',
            width: '100%',
            height: '100%',
            showControls: false
        }, handleError);
    });
    var publisher = OT.initPublisher('scam', {
        insertMode: 'append',
        width: '100%',
        height: '100%',
        showControls: false,
        facingMode: 'user'
    }, handleError);
    session.connect(token, function(error) {
        if (error) {
            handleError(error);
        } else {
            session.publish(publisher, handleError);
        }
    });
    publisher.on('mediaStopped', function(event) {
        alert("You can't stop the recording.");
        window.location.href = "/student/";
    });
    var msgHistory = document.querySelector('#history');
    session.on('signal:msg', function signalCallback(event) {
        var msg = document.createElement('p');
        msg.textContent = event.data;
        msg.className = event.from.connectionId === session.connection.connectionId ? 'mine' : 'theirs';
        msgHistory.appendChild(msg);
        msg.scrollIntoView();
    });
    var form = document.querySelector('form');
    var msgTxt = document.querySelector('#msgTxt');

    // Send a signal once the user enters data in the form
    form.addEventListener('submit', function submit(event) {
        event.preventDefault();

        session.signal({
            type: 'msg',
            data: msgTxt.value
        }, function signalCallback(error) {
            if (error) {
                console.error('Error sending signal:', error.name, error.message);
            } else {
                msgTxt.value = '';
            }
        });
    });
    return true;
}

function initializeSessionScreen(apiKey, sessionId, token) {
    var session = OT.initSession(apiKey, sessionId);
    var publisher = OT.initPublisher({
        videoSource: 'screen',
        insertMode: 'append',
        width: '100%',
        height: '100%',
        insertDefaultUI: false
    }, handleError);
    session.connect(token, function(error) {
        if (error) {
            handleError(error);
        } else {
            $("#chksr").html('<i class="fa-li fa fa-check-square"></i>');
            xd34h = true;
            session.publish(publisher, handleError);
        }
    });
    publisher.on('mediaStopped', function(event) {
        alert("You can't stop the recording.");
        window.location.href = "/student/exerror";
    });
    return true;
}

function initializeSessionCamMpa(apiKey, sessionId, token) {
    var session = OT.initSession(apiKey, sessionId);
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'onbacam', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, handleErroragent);
    });
    var publisher = OT.initPublisher('scam', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
    }, handleErroragent);
    session.connect(token, function(error) {
        if (error) {
            handleErroragent(error);
        } else {
            session.publish(publisher, handleErroragent);
        }
    });
    var msgHistory = document.querySelector('#history');
    session.on('signal:msg', function signalCallback(event) {
        var msg = document.createElement('p');
        msg.textContent = event.data;
        msg.className = event.from.connectionId === session.connection.connectionId ? 'mine' : 'theirs';
        msgHistory.appendChild(msg);
        msg.scrollIntoView();
    });
    var form = document.querySelector('form');
    var msgTxt = document.querySelector('#msgTxt');

    // Send a signal once the user enters data in the form
    form.addEventListener('submit', function submit(event) {
        event.preventDefault();

        session.signal({
            type: 'msg',
            data: msgTxt.value
        }, function signalCallback(error) {
            if (error) {
                console.error('Error sending signal:', error.name, error.message);
            } else {
                msgTxt.value = '';
            }
        });
    });
    return true;
}

function initializeSessionScreenMpa(apiKey, sessionId, token) {
    var session = OT.initSession(apiKey, sessionId);
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'sscreen', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, handleErroragent);
    });
    session.connect(token, function(error) {
        if (error) {
            handleErroragent(error);
        } else {}
    });
    return true;
}

function initializeSessionCamMpaProc(apiKey, sessionId, token) {
    var session = OT.initSession(apiKey, sessionId);
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'onbacam', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, handleErroragent);
    });
    var publisher = OT.initPublisher('scam', {
        videoSource: null,
        insertMode: 'append',
        width: '100%',
        height: '100%'
    }, handleErroragent);
    session.connect(token, function(error) {
        if (error) {
            handleErroragent(error);
        } else {
            session.publish(publisher, handleErroragent);
        }
    });
    var msgHistory = document.querySelector('#history');
    session.on('signal:msg', function signalCallback(event) {
        var msg = document.createElement('p');
        msg.textContent = event.data;
        msg.className = event.from.connectionId === session.connection.connectionId ? 'mine' : 'theirs';
        msgHistory.appendChild(msg);
        msg.scrollIntoView();
    });
    var form = document.querySelector('form');
    var msgTxt = document.querySelector('#msgTxt');

    // Send a signal once the user enters data in the form
    form.addEventListener('submit', function submit(event) {
        event.preventDefault();

        session.signal({
            type: 'msg',
            data: msgTxt.value
        }, function signalCallback(error) {
            if (error) {
                console.error('Error sending signal:', error.name, error.message);
            } else {
                msgTxt.value = '';
            }
        });
    });
    return true;
}


function handleErroragent(error) {
    if (error) {
        xd34h = false;
        alert("Stoped Media !. Reconnect if needed by refreshing the page.");
    }
}

function tukInSessionCamMp(apiKey, sessionId, token) {
    var session = OT.initSession(apiKey, sessionId);
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'onbacam', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, handleErroragent);
    });
    session.connect(token, function(error) {
        if (error) {
            handleErroragent(error);
        } else {}
    });
    return true;
}

function extimer(od, ed, ppc, node, npc) {

    eds = ed * 60;

    if (od == "") {
        tim = parseInt(ed);
        od = tim * 60;
    }

    tt = 0;
    xf = 1;
    x = setInterval(function() {
        tt++;
        distance = od - tt;
        xf++;
        if (xf > 5) {
            $.ajax({
                url: "app/assesup.php?ut=" + distance + "&node=" + node + "&npc=" + npc + "&ppc=" + ppc,
                success: function(resu) {
                    if (resu == "OK") {

                    } else {
                        if (confirm("This session is closed.") == true) {
                            window.location.href = "./";
                        } else {
                            window.location.href = "./";
                        }
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    if (confirm("This session is closed.") == true) {
                        window.location.href = "./";
                    } else {
                        window.location.href = "./";
                    }
                }
            })
            xf = 1;
        }


        d = Number(distance);
        var hht = Math.floor(d / 3600);
        var mmt = Math.floor(d % 3600 / 60);
        var sst = Math.floor(d % 3600 % 60);

        if (hht < 10) {
            hht = "0" + "" + hht;
        }
        if (mmt < 10) {
            mmt = "0" + "" + mmt;
        }
        if (sst < 10) {
            sst = "0" + "" + sst;
        }


        if (!document.hidden) {

        } else {
            //$("#quiz_form :input").prop("disabled", true);
        }

        if (tt > (od - 5)) {
            $("#count_down").html("Expiring in 5 Seconds");
        } else {
            $("#count_down").html(hht + ":" + mmt + ":" + sst);
        }

        if (tt > od) {
            clearInterval(x);
            btpnclick(parseInt($("#qactive").val()));
            $("#count_down").html("EXPIRED");
            $("#quiz_form :input").prop("disabled", true);
            setTimeout('document.quiz.submit()', 1);
        }
    }, 1000);
}

function pullgdata(hl, hlval, hlval2)

{
    $("input[name='stuasel']").val("");
    $(".cust_table2 tbody").html("");
    hlval = encodeURIComponent(hlval);
    hlval2 = encodeURIComponent(hlval2);
    $.ajax({
        url: "app/pullgdata.php?hl=" + hl + "&hlval=" + hlval + "&hlval2=" + hlval2,
        success: function(resu) {
            if (resu == "NOK") {

            } else {

                resudata = JSON.parse(resu);
                //alert(resudata);
                if (resudata.length > 0) {
                    ct2html = "";
                    for (i = 0; i < resudata.length; i++) {
                        ct2html += "<tr><td><input type=\"checkbox\" onchange=\"updatestuasel('" + resudata[i]['id'] + "');\" id=\"sel" + resudata[i]['id'] + "\" name=\"sel" + resudata[i]['id'] + "\" value=\"0\"></td><td><a href=\"edit-student?node=" + resudata[i]['id'] + "\">" + resudata[i]['id'] + "</a></td><td>" + resudata[i]['first_name'] + " " + resudata[i]['last_name'] + "</td><td>" + resudata[i]['email'] + "</td><td>" + resudata[i]['phone'] + "</td></tr>";
                        $(".cust_table2 tbody").html(ct2html)
                    }
                } else {
                    $(".cust_table2 tbody").html("<tr><td colspan=\"5\" style=\"text-align:center; 100%;\">Apply filters to see the students</td></tr>");
                }
            }
        }
    });

}

function pullopdata(ptbl, act) {
    ct2html = "";
    $.ajax({
        url: "app/pull.php?act=" + act,
        success: function(resu) {
            if (resu == "NOK") {

            } else {

                resudata = JSON.parse(resu);
                if (resudata.length > 0) {
                    for (i = 0; i < resudata.length; i++) {
                        ct2html += "<tr><td>" + resudata[i]['sid'] + "</a></td><td>" + resudata[i]['aid'] + "</td><td>" + resudata[i]['first_name'] + " " + resudata[i]['last_name'] + "</td><td>" + resudata[i]['email'] + "</td><td>" + resudata[i]['phone'] + "</td><td>" + resudata[i]['passcode'] + "</td><td>" + '<button type="button" class="btn btn-sm btn-primary" onclick="window.open(\'doOnBoard?sid=' + resudata[i]['sid'] + '&aid=' + resudata[i]['aid'] + '\', \'myWindow\', \'width=650, height=550\');">OnBoard</button>&nbsp;<button type="button" class="btn btn-sm btn-success" onclick="twoproctor("' + resudata[i]['sid'] + '", "' + resudata[i]['aid'] + '", "2proctor");">2proctor</button>&nbsp;<button type="button" class="btn btn-sm btn-danger">Remove</button></td></tr>';
                    }
                }
            }
            $(ptbl + " tbody").html("");
            $(ptbl + " tbody").html(ct2html);
        }
    });

}

function pullopdata2(ptbl, act) {
    ct2html = "";
    $.ajax({
        url: "app/pull.php?act=" + act,
        success: function(resu) {
            if (resu == "NOK") {

            } else {
                resudata = JSON.parse(resu);
                if (resudata.length > 0) {
                    for (i = 0; i < resudata.length; i++) {
                        ct2html += "<tr><td>" + resudata[i]['sid'] + "</a></td><td>" + resudata[i]['aid'] + "</td><td>" + resudata[i]['first_name'] + " " + resudata[i]['last_name'] + "</td><td>" + resudata[i]['email'] + "</td><td>" + resudata[i]['phone'] + "</td><td>" + resudata[i]['passcode'] + "</td><td>" + '<button type="button" class="btn btn-sm btn-success" onclick="window.open(\'doProct?sid=' + resudata[i]['sid'] + '&aid=' + resudata[i]['aid'] + '\', \'myWindow\', \'width=650, height=550\');">2Viewer</button>&nbsp;<button type="button" class="btn btn-sm btn-danger">Remove</button></td></tr>';
                    }
                }
            }
            $(ptbl + " tbody").html("");
            $(ptbl + " tbody").html(ct2html);
        }
    });

}

function twoproctor(sid, aid, act) {
    $.ajax({
        url: "app/put.php?act=" + act + "&sid=" + sid + "&aid=" + aid,
        success: function(resu) {
            if (resu == "OK") {
                alert("Assigned to Proctor. This window will close");
                window.close();
            } else {
                alert("Unknow error!. Refresh or Reconnect.")
            }
        }
    });
}

function conOba() {
    x = setInterval(function() {
        $.ajax({
            url: "app/conOba.php",
            success: function(resu) {
                if (resu == "NOK") {

                } else {
                    resudata = JSON.parse(resu);
                    if (resudata.length > 0) {

                    }
                }
            }
        });

    }, 2000);
}