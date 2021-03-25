CREATE DATABASE todo_list;
CREATE TABLE todo
(
  todo_id serial NOT NULL,
  descripcion character varying(255),
  CONSTRAINT todo_pkey PRIMARY KEY (todo_id)
)