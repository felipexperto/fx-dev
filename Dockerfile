FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && pnpm add -g serve

WORKDIR /app

COPY . /app

FROM base AS build
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS prod
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["serve", "-l", "4321", "/app/dist"]
