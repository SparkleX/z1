import { Container } from "inversify";
import { RepoHandlerImpl } from "./user/Transaction";
import {CrudRepositoryAdapter, AnsiAdapter } from "core-repository-crud";
import "./repository"
import { StudentRepo } from "./repository/StudentRepo";
import { Student } from "./domain/Student";
//


var handler = new RepoHandlerImpl();
var adapter:CrudRepositoryAdapter = new AnsiAdapter();

const container = new Container({skipBaseClassChecks: true});

export { container };