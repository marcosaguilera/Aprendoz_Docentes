
package com.aprendoz_test;

import java.util.Date;
import java.util.List;
import com.aprendoz_test.data.output.A_getCursoProcesoSVRtnType;
import com.aprendoz_test.data.output.Dash_aprendizajesRtnType;
import com.aprendoz_test.data.output.Dash_getAsigByDocenteRtnType;
import com.aprendoz_test.data.output.Dash_logDocentesRtnType;
import com.aprendoz_test.data.output.Dash_no_calificadosRtnType;
import com.aprendoz_test.data.output.EnviarMailEventualidadesRtnType;
import com.aprendoz_test.data.output.EventualitiesByDateRtnType;
import com.aprendoz_test.data.output.GetCurseByidGradeRtnType;
import com.aprendoz_test.data.output.GetListStudentsByCurseRtnType;
import com.aprendoz_test.data.output.GetScheduleByProfileRtnType;
import com.aprendoz_test.data.output.GetSubjectsByProfileGroupedRtnType;
import com.aprendoz_test.data.output.GetSubjectsByProfileRtnType;
import com.aprendoz_test.data.output.GetSyByCurDateRtnType;
import com.aprendoz_test.data.output.GetSyByCurDate_RtnType;
import com.aprendoz_test.data.output.GetTipoEventualidadByIdSubTipoRtnType;
import com.aprendoz_test.data.output.HQLlsCursosRtnType;
import com.aprendoz_test.data.output.HQLlsGradoRtnType;
import com.aprendoz_test.data.output.HQLlsPeriodoRtnType;
import com.aprendoz_test.data.output.HqlPersonaEventualidadRtnType;
import com.aprendoz_test.data.output.Hql_ls_cursosRtnType;
import com.aprendoz_test.data.output.Hql_tipo_eventualidadRtnType;
import com.aprendoz_test.data.output.InvolucradosRtnType;
import com.aprendoz_test.data.output.Last_accessHQLRtnType;
import com.aprendoz_test.data.output.OrientacionInvolucradosGrupoFamiliarRtnType;
import com.aprendoz_test.data.output.SeachEventualidadHQLRtnType;
import com.aprendoz_test.data.output.SearchReportesAlumnosRtnType;
import com.aprendoz_test.data.output.SearchStudentsByComplexNameRtnType;
import com.aprendoz_test.data.output.SendMailHQLOneRtnType;
import com.aprendoz_test.data.output.SendMailHQLRtnType;
import com.aprendoz_test.data.output.ShowInformationUser2RtnType;
import com.aprendoz_test.data.output.StudentsByCurseBySubjectRtnType;
import com.aprendoz_test.data.output.SubjectsBySyAndStudentRtnType;
import com.aprendoz_test.data.output._global_curriculo_asig_docRtnType;
import com.aprendoz_test.data.output._global_getSyByCurDateRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_test"
 *  07/28/2014 09:52:55
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_test
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<_global_curriculo_asig_docRtnType> _global_curriculo_asig_doc(String nickname, Integer idsyr, PagingOptions pagingOptions) {
        return ((List<_global_curriculo_asig_docRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants._global_curriculo_asig_docQueryName), nickname, idsyr, pagingOptions));
    }

    public List<_global_getSyByCurDateRtnType> _global_getSyByCurDate(Date f1, PagingOptions pagingOptions) {
        return ((List<_global_getSyByCurDateRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants._global_getSyByCurDateQueryName), f1, pagingOptions));
    }

    public List<A_getCursoProcesoSVRtnType> a_getCursoProcesoSV(Integer ppersona, PagingOptions pagingOptions) {
        return ((List<A_getCursoProcesoSVRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.a_getCursoProcesoSVQueryName), ppersona, pagingOptions));
    }

    public Integer actualizarClave(String usuario, String clave, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.actualizarClaveQueryName), usuario, clave, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer crearPlan(String p1, String p2, String p3, Integer id, Date fecha_plan, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.crearPlanQueryName), p1, p2, p3, id, fecha_plan, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Dash_aprendizajesRtnType> dash_aprendizajes(Integer idasignatura, PagingOptions pagingOptions) {
        return ((List<Dash_aprendizajesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.dash_aprendizajesQueryName), idasignatura, pagingOptions));
    }

    public List<Dash_getAsigByDocenteRtnType> dash_getAsigByDocente(String usuario, PagingOptions pagingOptions) {
        return ((List<Dash_getAsigByDocenteRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.dash_getAsigByDocenteQueryName), usuario, pagingOptions));
    }

    public List<Dash_logDocentesRtnType> dash_logDocentes(String usuario, Date f1, Date f2, PagingOptions pagingOptions) {
        return ((List<Dash_logDocentesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.dash_logDocentesQueryName), usuario, f1, f2, pagingOptions));
    }

    public List<Dash_no_calificadosRtnType> dash_no_calificados(Integer idasignatura, PagingOptions pagingOptions) {
        return ((List<Dash_no_calificadosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.dash_no_calificadosQueryName), idasignatura, pagingOptions));
    }

    public Integer deleteEventualidadPersona(Integer epid, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.deleteEventualidadPersonaQueryName), epid, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<EnviarMailEventualidadesRtnType> enviarMailEventualidades(Integer ide, PagingOptions pagingOptions) {
        return ((List<EnviarMailEventualidadesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.enviarMailEventualidadesQueryName), ide, pagingOptions));
    }

    public List<EventualitiesByDateRtnType> eventualitiesByDate(Date pfecha, PagingOptions pagingOptions) {
        return ((List<EventualitiesByDateRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.eventualitiesByDateQueryName), pfecha, pagingOptions));
    }

    public List<GetCurseByidGradeRtnType> getCurseByidGrade(Integer pgrado, PagingOptions pagingOptions) {
        return ((List<GetCurseByidGradeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getCurseByidGradeQueryName), pgrado, pagingOptions));
    }

    public com.aprendoz_test.data.DimensionCurricular getDimensionCurricularById(Integer id, PagingOptions pagingOptions) {
        List<com.aprendoz_test.data.DimensionCurricular> rtn = ((List<com.aprendoz_test.data.DimensionCurricular> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getDimensionCurricularByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_test.data.output.GetInformacionValiosaRtnType getInformacionValiosa(String usuario, PagingOptions pagingOptions) {
        List<com.aprendoz_test.data.output.GetInformacionValiosaRtnType> rtn = ((List<com.aprendoz_test.data.output.GetInformacionValiosaRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getInformacionValiosaQueryName), usuario, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_test.data.InscAlumActividad getInscAlumActividadById(Integer id, PagingOptions pagingOptions) {
        List<com.aprendoz_test.data.InscAlumActividad> rtn = ((List<com.aprendoz_test.data.InscAlumActividad> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getInscAlumActividadByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetListStudentsByCurseRtnType> getListStudentsByCurse(Integer pcurso, PagingOptions pagingOptions) {
        return ((List<GetListStudentsByCurseRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getListStudentsByCurseQueryName), pcurso, pagingOptions));
    }

    public List<GetScheduleByProfileRtnType> getScheduleByProfile(Integer pcurso, Integer psy, Integer pasignatura, PagingOptions pagingOptions) {
        return ((List<GetScheduleByProfileRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getScheduleByProfileQueryName), pcurso, psy, pasignatura, pagingOptions));
    }

    public List<GetSubjectsByProfileRtnType> getSubjectsByProfile(String usuario, Integer sy, PagingOptions pagingOptions) {
        return ((List<GetSubjectsByProfileRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSubjectsByProfileQueryName), usuario, sy, pagingOptions));
    }

    public List<GetSubjectsByProfileGroupedRtnType> getSubjectsByProfileGrouped(Integer sy, String usuario, PagingOptions pagingOptions) {
        return ((List<GetSubjectsByProfileGroupedRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSubjectsByProfileGroupedQueryName), sy, usuario, pagingOptions));
    }

    public List<GetSyByCurDateRtnType> getSyByCurDate(Date f1, PagingOptions pagingOptions) {
        return ((List<GetSyByCurDateRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSyByCurDateQueryName), f1, pagingOptions));
    }

    public List<GetSyByCurDate_RtnType> getSyByCurDate_(Date f1, PagingOptions pagingOptions) {
        return ((List<GetSyByCurDate_RtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSyByCurDate_QueryName), f1, pagingOptions));
    }

    public List<GetTipoEventualidadByIdSubTipoRtnType> getTipoEventualidadByIdSubTipo(Integer id, PagingOptions pagingOptions) {
        return ((List<GetTipoEventualidadByIdSubTipoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getTipoEventualidadByIdSubTipoQueryName), id, pagingOptions));
    }

    public List<HQLlsCursosRtnType> hQLlsCursos(PagingOptions pagingOptions) {
        return ((List<HQLlsCursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hQLlsCursosQueryName), pagingOptions));
    }

    public List<HQLlsGradoRtnType> hQLlsGrado(PagingOptions pagingOptions) {
        return ((List<HQLlsGradoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hQLlsGradoQueryName), pagingOptions));
    }

    public List<HQLlsPeriodoRtnType> hQLlsPeriodo() {
        return ((List<HQLlsPeriodoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.HQLlsPeriodoQueryName)));
    }

    public List<HqlPersonaEventualidadRtnType> hqlPersonaEventualidad(Integer ide, PagingOptions pagingOptions) {
        return ((List<HqlPersonaEventualidadRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hqlPersonaEventualidadQueryName), ide, pagingOptions));
    }

    public List<Hql_ls_cursosRtnType> hql_ls_cursos(Integer idg, PagingOptions pagingOptions) {
        return ((List<Hql_ls_cursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hql_ls_cursosQueryName), idg, pagingOptions));
    }

    public List<Hql_tipo_eventualidadRtnType> hql_tipo_eventualidad(PagingOptions pagingOptions) {
        return ((List<Hql_tipo_eventualidadRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hql_tipo_eventualidadQueryName), pagingOptions));
    }

    public List<InvolucradosRtnType> involucrados(Integer peventualidad, PagingOptions pagingOptions) {
        return ((List<InvolucradosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.involucradosQueryName), peventualidad, pagingOptions));
    }

    public List<Last_accessHQLRtnType> last_accessHQL(String user, PagingOptions pagingOptions) {
        return ((List<Last_accessHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.last_accessHQLQueryName), user, pagingOptions));
    }

    public List<OrientacionInvolucradosGrupoFamiliarRtnType> orientacionInvolucradosGrupoFamiliar(Integer pgrupo, Integer ppersona, PagingOptions pagingOptions) {
        return ((List<OrientacionInvolucradosGrupoFamiliarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.orientacionInvolucradosGrupoFamiliarQueryName), pgrupo, ppersona, pagingOptions));
    }

    public List<SeachEventualidadHQLRtnType> seachEventualidadHQL(String search) {
        return ((List<SeachEventualidadHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.SeachEventualidadHQLQueryName), search));
    }

    public List<SearchReportesAlumnosRtnType> searchReportesAlumnos(String search, PagingOptions pagingOptions) {
        return ((List<SearchReportesAlumnosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.searchReportesAlumnosQueryName), search, pagingOptions));
    }

    public List<SearchStudentsByComplexNameRtnType> searchStudentsByComplexName(String search, PagingOptions pagingOptions) {
        return ((List<SearchStudentsByComplexNameRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.searchStudentsByComplexNameQueryName), search, pagingOptions));
    }

    public List<SendMailHQLRtnType> sendMailHQL(Integer ide, PagingOptions pagingOptions) {
        return ((List<SendMailHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.sendMailHQLQueryName), ide, pagingOptions));
    }

    public List<SendMailHQLOneRtnType> sendMailHQLOne(Integer ide, Integer ppersona, PagingOptions pagingOptions) {
        return ((List<SendMailHQLOneRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.sendMailHQLOneQueryName), ide, ppersona, pagingOptions));
    }

    public com.aprendoz_test.data.output.ShowInformationUserRtnType showInformationUser(String user, PagingOptions pagingOptions) {
        List<com.aprendoz_test.data.output.ShowInformationUserRtnType> rtn = ((List<com.aprendoz_test.data.output.ShowInformationUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.showInformationUserQueryName), user, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<ShowInformationUser2RtnType> showInformationUser2(String user, PagingOptions pagingOptions) {
        return ((List<ShowInformationUser2RtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.showInformationUser2QueryName), user, pagingOptions));
    }

    public List<StudentsByCurseBySubjectRtnType> studentsByCurseBySubject(Integer pasignatura, Integer pcurso, PagingOptions pagingOptions) {
        return ((List<StudentsByCurseBySubjectRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.studentsByCurseBySubjectQueryName), pasignatura, pcurso, pagingOptions));
    }

    public List<SubjectsBySyAndStudentRtnType> subjectsBySyAndStudent(Integer idpersona, Integer idsyp, PagingOptions pagingOptions) {
        return ((List<SubjectsBySyAndStudentRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectsBySyAndStudentQueryName), idpersona, idsyp, pagingOptions));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
