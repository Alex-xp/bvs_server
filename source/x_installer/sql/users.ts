import crypto from 'crypto';
import { CONFIG } from '../../xcore/config';


export const users_table = {
    sql: `
    DROP TABLE IF EXISTS users;
    CREATE TABLE users (
        id          BIGSERIAL NOT NULL PRIMARY KEY,
        login       VARCHAR(250) NOT NULL DEFAULT(''),
        password    VARCHAR(250) NOT NULL DEFAULT(''),
        info        TEXT NOT NULL DEFAULT('')
    );
    
    COMMENT ON TABLE users IS 'Пользователи системы';
    COMMENT ON COLUMN users.id IS 'Идентификатор пользователя';
    COMMENT ON COLUMN users.login IS 'Логин пользователя';
    COMMENT ON COLUMN users.password IS 'Пароль пользователя';
    COMMENT ON COLUMN users.info IS 'Описание пользователя';
    `,
    args: new Array()
};


export const insert_admin = {
    sql: `INSERT INTO users("login", "password", "info") VALUES ($1, $2, $3)`,
    args: ['admin', crypto.createHmac('sha256', CONFIG.key_code).update('admin').digest('hex'), 'admin']
};

export const users_roles = {
    sql: `
    DROP TABLE IF EXISTS users_roles;
    `,
    args: new Array()
};
