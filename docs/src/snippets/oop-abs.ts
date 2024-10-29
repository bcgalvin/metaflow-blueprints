const filters = EventFilters.all([
  DataFilter.path("body.ref").asString().equals("refs/heads/main"),

  ContextFilter.source("custom-webhook"),

  TimeFilter.between("09:00:00", "17:00:00"),

  ExprFilter.create('value > 100 && status == "success"', {
    value: "body.value",
    status: "body.status",
  }),

  ScriptFilter.lua(`
      if event.body.value > 100 then
        return true
      end
      return false
    `),
]);

const triggerConditions = TriggerConditions.any([
  TriggerConditions.dependency("dep-1").and("dep-2").or("dep-3"),
  TriggerConditions.matchAll(["dep-4", "dep-5"]),
]).withReset({
  cron: "59 23 * * *",
  timezone: "America/Los_Angeles",
});
