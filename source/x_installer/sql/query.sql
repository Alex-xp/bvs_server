-- Таблица проектов
DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
    id          BIGSERIAL NOT NULL PRIMARY KEY,
    name        VARCHAR(250) NOT NULL DEFAULT(''),
    c_flags     JSON NOT NULL DEFAULT('{}'),
    compiller   VARCHAR(250) NOT NULL DEFAULT(''),
    info        TEXT NOT NULL DEFAULT('')
);

COMMENT ON TABLE projects IS 'Таблица проектов';
COMMENT ON COLUMN projects.id IS 'Идентификатор проекта';
COMMENT ON COLUMN projects.name IS 'Наименование проекта (имя выходного файла)';
COMMENT ON COLUMN projects.c_flags IS 'Флаги компилятора JSON';
COMMENT ON COLUMN projects.compiller IS 'Компилятор, который применяется для проекта';
COMMENT ON COLUMN projects.info IS 'Описание проекта';

INSERT INTO projects ( "name", "c_flags", "compiller", "info" ) VALUES ('main_project', '{"flags":["-c11"]}', 'gcc', 'test project');




