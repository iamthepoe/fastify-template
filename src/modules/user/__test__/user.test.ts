import { describe, it, before } from "node:test";
import { ok } from "node:assert";
import { UserController, UserRepository, UserService} from "../user.module";

describe('User Repository', ()=>{
    let repository: UserRepository;

    before(()=>{
        repository = new UserRepository();
    });

    it('should be defined', ()=>{
        ok(repository, 'Repository is defined.');
    });
})

describe('User Service', ()=>{
    let service: UserService;

    before(()=>{
        let repository = new UserRepository();
        service = new UserService(repository);
    });

    it('should be defined', ()=>{
        ok(service, 'Service is defined.');
    });
});

describe('User Controller', ()=>{
    let controller: UserController;

    before(()=>{
        let repository = new UserRepository();
        let service = new UserService(repository);
        controller = new UserController(service);
    });

    it('should be defined', ()=>{
        ok(controller, 'Controller is defined.');
    });
});